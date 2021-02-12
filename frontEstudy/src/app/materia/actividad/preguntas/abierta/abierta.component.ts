import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {simpleEditor} from '../../../../models/simpleEditor';
import {documentEditor} from '../../../../models/documentEditor';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AbiertaService } from 'src/app/administracion/carga-actividades/services/abierta.service';

declare var alertify;

@Component({
  selector: 'respuesta-abierta',
  templateUrl: './abierta.component.html',
  styleUrls: ['./abierta.component.scss']
})
export class AbiertaComponent implements OnInit {

  Data: any;
  jwt;
  pregunta;
  edicion;
  idMateriaFechaActividad;

  @Output() actividadCargada = new EventEmitter();

  idRespuesta = null;


  simpleEditor = simpleEditor;
  documentEditor = documentEditor;
  respuesta;
  model;

  constructor(
    private _usuarioService : UsuarioService,
    private _abiertaService : AbiertaService
  ) {  }

  ngOnInit() {    
    this.pregunta = this.Data.pregunta;    
    this.edicion = this.Data.edicion;
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    
    this.jwt = this._usuarioService.getJWT();
    this.getDatos();

    if (this.pregunta['importancia_actividad_id'] == 2) {
      setTimeout(() => {
        this.actividadCargada.emit(this.pregunta.datos_pregunta_id);    
      }, 1000);
    }else {
      this.model = {
        editorData: '<p>Hello, world!</p>'
    };
    }    
  }

  getDatos(){
    let datosRespuesta = this.pregunta.arreglo_reactivos;    
    
    setTimeout(() => {
      if (datosRespuesta.respuesta) {
        this.respuesta = datosRespuesta['respuesta'][0];      
        this.idRespuesta = this.respuesta.respuesta_id;
        this.model = this.respuesta.respuesta;          
      }
      if (!this.edicion) {
        this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
      }  
    }, 10); 
      
  //   this._abiertaService.consultaRespuesta(this.pregunta.pregunta_id,this.idMateriaFechaActividad,this.jwt).subscribe(
  //     response =>{
  //       console.log(response);
        
  //       if(response && response['status']){
  //         this.respuesta = response['respuesta'][0];
  //         this.idRespuesta = this.respuesta.respuesta_id
  //         this.model = this.respuesta.respuesta;          
  //       }
  //       if (!this.edicion) {
  //         this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
  //       }
  //     },error =>{
  //       console.log(error)
  //     }
  //   )
  }

  guardarBorrador( event ) {
    let dbRespuesta, bandera = 1;
    if (this.respuesta) {
      dbRespuesta = this.respuesta.respuesta;
      if (this.model === dbRespuesta) {
        bandera = 0;
      }
    }    
    if (this.model.length > 0 && bandera == 1) {
      this._abiertaService.guardaRespuesta(this.pregunta.pregunta_id,this.model ,this.idMateriaFechaActividad,this.jwt,this.idRespuesta).subscribe(
        response =>{
          if(response && response['status']){
            if (response['idRespuesta']) this.idRespuesta = response['idRespuesta'];
            alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
          }else{
            alertify.error('Error al guardar').dismissOthers(); 
          }
      },error =>{
        console.log(error)
      });
    }
  }

  editorCargado(evt: any){    
    this.actividadCargada.emit(this.pregunta.datos_pregunta_id);    
  }

}
