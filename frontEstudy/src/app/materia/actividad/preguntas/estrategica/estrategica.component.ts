import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {simpleEditor} from '../../../../models/simpleEditor';
import {documentEditor} from '../../../../models/documentEditor';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EstrategicaService } from 'src/app/administracion/carga-actividades/services/estrategica.service';

declare var alertify;

@Component({
  selector: 'respuesta-estrategica',
  templateUrl: './estrategica.component.html',
  styleUrls: ['./estrategica.component.scss']
})
export class EstrategicaComponent implements OnInit {

  Data: any;
  jwt;
  pregunta;
  idMateriaFechaActividad;
  edicion;
  @Output() actividadCargada = new EventEmitter();

  idPregunta;

  idEstatusRespuesta;
  idRespuesta = null;

  respuesta;
  texto;
  numero;

  Positivo;
  Negativo;
  Interesante;

  respuestaP;
  respuestaN;
  respuestaI;

  idPositivo;
  idNegativo;
  idInteresante;

  simpleEditor = simpleEditor;
  documentEditor = documentEditor;

  constructor(
    private _usuarioService: UsuarioService,
    private _estrategicaService: EstrategicaService,
    
  ) { }

  ngOnInit() {
    this.pregunta = this.Data.pregunta;    
    this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
    this.edicion = this.Data.edicion;

    this.jwt = this._usuarioService.getJWT();
    if(this.pregunta.contenido_pregunta){
      this.Positivo = this.pregunta.contenido_pregunta.pregunta1;
      this.Negativo = this.pregunta.contenido_pregunta.pregunta2;
      this.Interesante = this.pregunta.contenido_pregunta.pregunta3;
    }

    this.idPregunta = this.pregunta.pregunta_id;

    let datosPregunta = this.pregunta.arreglo_reactivos;

    setTimeout(() => {
      if (datosPregunta.respuesta) {
        this.respuesta = datosPregunta.respuesta;
        this.idRespuesta = this.respuesta[0].respuesta_id;

        this.respuestaP=this.respuesta[0].respuesta1;
        this.respuestaN=this.respuesta[0].respuesta2;
        this.respuestaI=this.respuesta[0].respuesta3;
      }

      if (!this.edicion) {
        this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
      }
    }, 10); 


    // this._estrategicaService.consultaRespuesta(this.idPregunta,this.jwt,this.idMateriaFechaActividad).subscribe(
    //   response =>{
    //     console.log(response);
    //     if(response && response['status']){
    //       this.respuesta = response['respuesta'];

    //       this.idRespuesta = this.respuesta[0].respuesta_id;

    //       this.respuestaP=this.respuesta[0].respuesta1;
    //       this.respuestaN=this.respuesta[0].respuesta2;
    //       this.respuestaI=this.respuesta[0].respuesta3;
    //     }
    //     if (!this.edicion) {
    //       this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    //     }
    //   },error =>{
    //     console.log(error)
    //   }
    // )

  }

  guardarBorrador( texto) {

    this._estrategicaService.guardaRespuesta(this.idPregunta,this.respuestaP,this.respuestaN,this.respuestaI, this.jwt, this.idMateriaFechaActividad ,this.idRespuesta).subscribe(
      response =>{
        
        if(response && response['status']){
          if(response['idRespuesta']){
          this.idRespuesta=response['idRespuesta'];
          }
          alertify.success('<i class="fa fa-save"></i>').dismissOthers(); 
        }else{
          alertify.error('Error al guardar').dismissOthers(); 
        }
    },error =>{
      console.log(error)
    }
  );
}

editorCargado(evt: any){
  setTimeout(() => {
    this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
  }, 100);
}

}
