import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrivilegiosService } from '../services/privilegios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  privilegioForm: FormGroup;
  id_institucion;
  title: string;
  jwt: string;
  id_privilegio;
  privilegio;
  idPadre;
  _privilegio;
  muestraEstatus;
  radio = 0;
  tipoAdmin;


  constructor(

    private _usuarioService: UsuarioService,
    private formbuilder: FormBuilder,
    private _privilegiosServices: PrivilegiosService,
    private router : Router,
    private _catalogoService: CatalogoService,
    private route: ActivatedRoute

  ) { 
    this.id_privilegio = this.route.snapshot.paramMap.get('id');


    if(this.id_privilegio)
    this.title = 'Editar elemento';
  else
    this.title = 'Nuevo elemento';
    
  this._usuarioService.pushBreadcum(this.title,"",2);
  }

  get f() { return this.privilegioForm.controls; }

  

  ngOnInit() {

    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;

    this._catalogoService.consultaPrivilegios( this.jwt, this.muestraEstatus).subscribe(
      response =>{
        console.log(response)
        if(response && response['status']){
          this.privilegio = response['privilegios'];
        }
      },error =>{
        console.log(<any>error)
      });

    this.privilegioForm = this.formbuilder.group({
      privilegio: [''],
      icono: ['' ],
      url:  [''],
      cvPrivilegio:  [''],
      tipoPrivilegio: ['1'],
      idPadre: ['']
     });

     if(this.id_privilegio != null){ 
      this._privilegiosServices.consulta( this.jwt , this.id_privilegio).subscribe(
        response =>{
          console.log(response['privilegios'])
          if(response && response['status']){
            this._privilegio = response['privilegios'][0]; 
            this.privilegioForm.get('cvPrivilegio').setValue(this._privilegio.privilegio_clave);
            this.privilegioForm.get('privilegio').setValue(this._privilegio.privilegio);
            this.privilegioForm.get('icono').setValue(this._privilegio.icono);
            this.privilegioForm.get('url').setValue(this._privilegio.url);
            this.privilegioForm.get('idPadre').setValue(this._privilegio.privilegio_padre_id);
            response['privilegios'].forEach(_idPadre => {
              let privilegioPadre = _idPadre.privilegio_padre_id
              if (!privilegioPadre) {
                this.radio = 0; 
              }else{
                this.radio = 1; 
              }  
            });

          }
        },error =>{
          console.log(<any>error)
        });
    
    }
    
  }
  
  limpiar(tipo){
    if(tipo == 1 ){
      if(this.id_privilegio == null ){
        this.privilegioForm.get('icono').setValue("");
        this.privilegioForm.get('url').setValue("");
        this.privilegioForm.get('idPadre').setValue("");
      }
    }

  }
  

  enviarInformacion(){
    //stop here if form is invalid
    
    if (this.privilegioForm.invalid){
      Object.keys(this.privilegioForm.controls).forEach( controlKey => {
        this.privilegioForm.controls[controlKey].markAsTouched();
      });
      return;
    }

    this._privilegiosServices.modificaPrivilegios(this.privilegioForm , this.jwt, this.id_privilegio).subscribe(
     response =>{
       console.log(response)
         if(response && response['status']){
           this.router.navigate(['admin/privilegio/consulta']);
           alertify.success(response['msg'])
         }else{
           alertify.error(response['msg'])
         }
     },error =>{
       console.log(<any>error)
     });
    if (this.privilegioForm.invalid) {
     return;
    }
  }
}

