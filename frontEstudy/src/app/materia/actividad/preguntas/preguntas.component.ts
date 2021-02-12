import { Component, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActividadService } from '../services/actividad.service';
import {metrica} from '../../../services/metricaCalificacion';

declare var alertify;

@Component({
  selector: 'app-pregunta',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnChanges {
  @Input() pregunta;
  @Input() indice;
  @Input() formatoNumero;
  @Input() fechaActividad;
  @Input() edicion;
  @Input() intentosRestantes;
  @Input() tipoCalificacion;
  @Input() numeroPreguntas;
  @Input() idAlumno;
  @Output() cargaCompletada = new EventEmitter();
  
  rol;
  jwt;


  automatica;

  idMateriaFechaActividad;
  calificacionActividad;
  metricaCalif;

  constructor(
    private _sanitizer : DomSanitizer,
    private _usuarioService: UsuarioService,
    private _actividadService: ActividadService
  ) { }

  ngOnChanges() {    
    this.jwt = this._usuarioService.getJWT();
    this.rol = this._usuarioService.getRol();
    this.metricaCalif = metrica;   
    this.idMateriaFechaActividad = this.fechaActividad.materia_fecha_actividad_id;
    if(this.tipoCalificacion == "3")
      this.pregunta.ponderacion = (1/ this.numeroPreguntas *100).toFixed(2);
    

        this.pregunta.pregunta_html = this.htmlProperty(this.pregunta.pregunta? this.pregunta.pregunta: null);

    if(this.pregunta.reactivos == '1' ){
      this.automatica = 1;
    }else{
      this.automatica = 0;
    }

  }

  formato(index){
    if(this.formatoNumero == '2')  
      return String.fromCharCode(96 + index);
    else
      return index;
  }

  htmlProperty(html) : SafeHtml {
    
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  guardarCalificacion(event){
    let valor = event.target.value;
    this._actividadService.calificaRespuesta(this.fechaActividad.materia_fecha_actividad_id, this.pregunta.datos_pregunta_id,valor,this.tipoCalificacion,this.numeroPreguntas,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          alertify.success(response['msg']).dismissOthers(); 
          this._actividadService.actividadCalificada.emit();
          this.pregunta.incompleto = false;
        }else{
          alertify.error(response['msg']).dismissOthers(); 
        }
      },error=>{
        console.log(<any> error)
      }
    )
  }

  guardarSeleccion(){
    alertify.confirm('¿Deseas guardar tus respuestas?',
    function(){
      alertify.success('Respuestas guardadas').dismissOthers();
    }.bind(this),
    function(){
      alertify.error('Cancel');
    });
  }
        
  // cargaActividad(evt: any){
  //   this.cargaCompletada.emit(evt);
  // }
}
