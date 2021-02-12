import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CorreoService } from '../services/correo.service';
import { Archivo } from '../../../models/archivo';

declare var alertify: any;

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.scss']
})
export class NuevoCorreoComponent implements OnInit {
  breadcrum = [];
  title: string;
  correoForm: FormGroup;  
  jwt;
  institucion;
  model;
  data;
  estado: number = 0;
  buttonDisabled: boolean = true;    
  alumnos;
  idCorreo;
  correos;
  archivo: any;
  directorio;
  icono;
  tipoDoc;
  estadoArchivo: boolean = false;
  tipoAdmin;
  private archivos: Archivo = new Archivo();
  public editorData = '<p>Hello, world!</p>';

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService,
    private _correoService: CorreoService,
    private router : Router,
    private route: ActivatedRoute
  ) { 
    this.idCorreo = this.route.snapshot.paramMap.get('id');

    if(this.idCorreo)
      this.title = 'Editar correo';
    else
      this.title = 'Nuevo correo';
      
    this._usuarioService.pushBreadcum(this.title,"",2);      
    this.institucion = this._usuarioService.getRol();   
  }

  get f() { return this.correoForm.controls; }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this.model = {
      editorData: this.institucion.institucion + '<p><strong>LIGALIGA</strong></p><p><strong>CURPCURP</strong></p><p><strong>USERUSER</strong></p><p><strong>PASSPASS</strong></p><br>'
    };  
    this.correoForm = this.formBuilder.group({
      asuntoCorreo: ['', Validators.required],
      copiaCorreo: [''],
      ocultaCorreo: [''],
      adjuntaCorreo: [''],
      textoCorreo: [this.model.editorData]
    });    

    if(this.idCorreo != null){
      
      this._correoService.consultaCorreo(this.idCorreo , this.jwt).subscribe(
        response =>{        
          console.log(response)  
          if(response && response['status']){
            this.correos = response['correo'][0];    
            this.directorio = this.correos.correo_attachment;
            this.tipoDoc = this.correos.correo_attachment.substr(8).split('.')[1];
            this.archivos.datos = {url: this.directorio, tipo: this.tipoDoc, icono: ''};
            this.correoForm.get('asuntoCorreo').setValue(this.correos.correo_subject);
            this.correoForm.get('copiaCorreo').setValue(this.correos.correo_cc);
            this.correoForm.get('ocultaCorreo').setValue(this.correos.correo_bco);
            this.correoForm.get('textoCorreo').setValue(this.correos.correo_body);
          }
        },error =>{
          console.log(<any>error)
        });
    }    
  }



  datosEditor( event: CKEditor4.EventInfo  ) {
    this.data = event.editor.getData();
    console.log(this.data)
    this.estado = 1;
    this.buttonDisabled = false;      
  }  

  cargaAdjunto(evt:  any){
    this.archivo = evt.target.files[0];
    let ultimo = this.archivo.name.lastIndexOf('.');
    this.tipoDoc = this.archivo.name.substr(ultimo + 1);
    if (this.tipoDoc == 'docx' || this.tipoDoc == 'pdf' || this.tipoDoc == 'png' || this.tipoDoc == 'jpg') {
      this.estadoArchivo = true;
      alertify.success("Documento adjunto correcto");        
    }else{
      this.estadoArchivo = false
      alertify.error("Documento adjunto inválido");        
    }
  }

  enviarInformacion() {
    if (this.correoForm.invalid) {
      Object.keys(this.correoForm.controls).forEach( controlKey => {
        this.correoForm.controls[controlKey].markAsTouched();
      });
      return;
    }     
    if(this.estado == 1 && this.estadoArchivo) {
      this._correoService.modificaCorreo(this.correoForm , this.jwt, this.idCorreo).subscribe(
        response =>{
            if(response && response['status']){
              if (response['id_correo']){
                this.idCorreo = response['id_correo'];
              }
              this._correoService.enviarArchivo(this.idCorreo , this.jwt, this.archivo).subscribe(
                respuesta =>{
                    if(respuesta && respuesta['status']){
                      alertify.success(respuesta['msg'])
                    }else{
                      alertify.error(respuesta['msg'])
                    }          
                },error =>{
                  console.log(<any>error)
                });               
              this.router.navigate(['admin/manejador-correo/consulta']);
              alertify.success(response['msg'])
            }else{
              alertify.error(response['msg'])
            }
   
        },error =>{
          console.log(<any>error)
        });      
    }      
    else {
      this.buttonDisabled = true;
      if (this.estado = 0) {
        alertify.error("Debes editar el documento");        
      }else if(!this.estadoArchivo){
      }
    }
  }  



}
