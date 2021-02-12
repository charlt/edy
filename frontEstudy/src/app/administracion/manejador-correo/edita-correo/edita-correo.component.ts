import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify: any;

@Component({
  selector: 'app-edita-correo',
  templateUrl: './edita-correo.component.html',
  styleUrls: ['./edita-correo.component.scss']
})
export class EditaCorreoComponent implements OnInit {
  breadcrum = [];
  title: string;
  jwt;
  institucion;
  model;
  data;
  estado: number = 0;
  buttonDisabled: boolean = false;    
  alumnos;
  tipoAdmin;
//  public Editor = ClassicEditor;

  constructor(
    private _usuarioService: UsuarioService,
    private _catalogoService: CatalogoService
  ) { 
    this.title = 'Editar correo';
    this._usuarioService.pushBreadcum(this.title,"",2);  
    this.institucion = this._usuarioService.getRol();
  }

  ngOnInit() {
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;    
    this.model = {
      editorData: this.institucion.institucion + '<p><strong>LIGALIGA</strong></p><p><strong>USERUSER</strong></p><p><strong>PASSPASS</strong></p><br>'
    }; 

    /*this._catalogoService.consultaAlumno(this.jwt, '0,50').subscribe(
      response =>{
        console.log(response)
          if(response && response['status']){
            this.alumnos = response['alumno'];
            // this.alumnos.forEach(alumno => {
            //   console.log(alumno.alumno_id, alumno.alumno_nombre)
            // });
            console.log(response['alumno'].alumno_id)
          }
      },error =>{
        console.log(<any>error)
      });*/

  }

  /*datosEditor( { editor }: ChangeEvent ) {
    this.data = editor.getData();
    this.model.editorData = this.data;
    this.estado = 1;
    this.buttonDisabled = false;      
  } */ 

  enviarInformacion() {
    if(this.estado == 1) {
      console.log(this.data);
    }      
    else {
      this.buttonDisabled = true;      
      alertify.error("Debes editar el documento");
    }
  }

}
