import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { TranslateService } from '@ngx-translate/core';
import { CorreoService } from '../services/correo.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var alertify: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  breadcrum = [];
  title: string;
  jwt;
  correos;
  public search;  
  textoCorreo;
  asuntoCorreo;
  closeResult: string;
  modal;
  grupos;
  grupoForm: FormGroup;
  idCorreo;
  listaUsuarios;
  btnEnviar: boolean = false;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private translate: TranslateService,
    private _correoService: CorreoService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router : Router
  ) { 
    this.title = 'Consulta';
    this._usuarioService.pushBreadcum(this.title,"",2);      
  }

  get f() { return this.grupoForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this._catalogoService.consultaCorreo(this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.correos = response['correo'];
          }

      },error =>{
        console.log(<any>error)
      });    

      this.grupoForm = this.formBuilder.group({
        catGrupos: ['', Validators.required],
      });       
  }

  eliminar(id,index){
    
    alertify.confirm(this.translate.instant('MsgEraseEmail'),
    function(){
      this._correoService.elimina(id,this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              this.correos.splice(index,1);
              alertify.success(response['msg']);
            }
            else{
              alertify.success(response['msg']);
            }
  
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancel');
    });
      console.log("Borrar")
  }  

  open(content, body, asunto, modal, id_correo) {
    this.modal = modal;  
    this.idCorreo = id_correo;
    if (this.modal == 1) {
      this.textoCorreo = body;
      this.asuntoCorreo = asunto;       
    }
    else if (this.modal == 2) {
      this.textoCorreo = '<p>Selecciona a quienes serán enviados estos correos</p><p>En esta parte sólo se pueden enviar correos a cierto grupo de alumnos</p>';
      this.asuntoCorreo = 'Enviar correo: ' + asunto;
      this._catalogoService.consultaListaCorreo(this.jwt).subscribe(
        response =>{
          console.log(response)
            if(response && response['status']){
              this.grupos = response['grupos'];
            }
        },error =>{
          console.log(<any>error)
        });      
    }    

      this.modalService.open(content, { size: 'lg' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }); 
  } 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
  }    

  enviarCorreo(){
    if (this.grupoForm.invalid) {
      Object.keys(this.grupoForm.controls).forEach( controlKey => {
        this.grupoForm.controls[controlKey].markAsTouched();
      });
      return;
    }    
    console.log(this.grupoForm.get('catGrupos').value, this.idCorreo)
    this.btnEnviar = true;
    this._correoService.enviarCorreo(this.idCorreo, this.jwt, this.grupoForm).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.modalService.dismissAll();
            this.btnEnviar = false;
            alertify.success(response['msg'])
          }else{
            alertify.error(response['msg'])
          }
      },error =>{
        console.log(<any>error)
      });      
  }

  verLista(){
    let idGrupo = this.grupoForm.get('catGrupos').value;
    this.listaUsuarios = "";
    this._correoService.consultaLista(idGrupo, this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){  
            this.listaUsuarios = response['alumnos'];
          }
          else{
            this.listaUsuarios = false;
          }          

      },error =>{
        console.log(<any>error)
      });      
  }
}
