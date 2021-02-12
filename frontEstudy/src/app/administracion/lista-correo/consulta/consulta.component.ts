import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaCorreoService } from '../services/lista-correo.service';
import { TranslateService } from '@ngx-translate/core';

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
  public search;
  lista;
  asunto: string;
  usuarios: any;
  tipoAdmin;
  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,  
    private modalService: NgbModal,
    private _listaCorreoService: ListaCorreoService,
    private translate: TranslateService
  ) { 
    this.title = 'Consulta de lista de correos';
    this._usuarioService.pushBreadcum(this.title,"",2);          
  }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this._catalogoService.consultaListaCorreo(this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.lista = response['grupos'];
          }
      },error =>{
        console.log(<any>error)
      });         
  }

  open(content, asunto, id) {
    this.asunto = asunto;
    this.modalService.open(content, { size: 'lg' });
    this.usuarios = "";
    this._listaCorreoService.consultaLista(id, this.jwt).subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.usuarios = response['alumnos'];
          }
          else{
            this.usuarios = false;
          }          

      },error =>{
        console.log(<any>error)
      });    
  }   

  eliminar(id,index){
    
    alertify.confirm(this.translate.instant('MsgEraseList'),
    function(){
      this._listaCorreoService.elimina(id,this.jwt).subscribe(
        response =>{
          console.log(response)
            if(response && response['status']){
              this.lista.splice(index,1);
              alertify.success(response['msg']);
            }
            else{
              alertify.error(response['msg']);
            }
        },error =>{
          console.log(<any>error)
        });
    }.bind(this),
    function(){
      alertify.error('Cancel');
    });
  } 

}
