import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActividadService } from './services/actividad.service';

import {TrActividad} from '../../models/learning/trActividad';
import {TrMateriaFechaActividad} from '../../models/learning/trMateriaFechaActividad';
import { MateriaService } from 'src/app/services/materia.service';
import { id } from 'date-fns/locale';

declare var alertify;

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnChanges {

  successCharge: EventEmitter<boolean> = new EventEmitter();

  jwt:string;
  respuestas;
  contenidoActividad;
  cargando: boolean = true;
  preguntasActividad: any;
  fechaActual = new Date();
  idRol;
  verPregunta;

  aplicar: boolean = false;
  semaforo: any;
  sinFecha: boolean = false;
  botonTerminar: boolean;
  
  @Input() edicion;
  @Input() fechaActividad:TrMateriaFechaActividad = new TrMateriaFechaActividad();
  @Input() actividad:TrActividad = new TrActividad();
  @Output() actividadEnviada = new EventEmitter();
  @Input() intentosRestantes;
  @Input() idAlumno;
  
  constructor(
    private _usuarioService: UsuarioService,
    private _actividadService: ActividadService,
    private _materiaService: MateriaService
  ) {
    
  }

  ngOnChanges() {   
    // this.edicion = 1; 
    if (this.actividad.fecha_inicio == 'Invalid Date' || this.actividad.fecha_fin == 'Invalid Date') {
      this.sinFecha = true;
    }            
    this.jwt = this._usuarioService.getJWT();
    this.idRol = this._usuarioService.getRol().rol_id;    
    if (this.actividad['importancia_actividad_id'] == 2 && this.fechaActividad['materia_fecha_actividad_id']) {
      this.aplicar = true;
      this._actividadService.creaSeguimientoActividad(this.fechaActividad['materia_fecha_actividad_id'])
      .subscribe(response => {
        if (response && response['status']) {
            this.setSemaforo(response['total']);
            this.consultaPreguntas();
        }
      }, error => {
        console.log(<any>error);
      });
    }
    else {
      this.consultaPreguntas();
    }
    
    //AQUI VALIDAR SI ES DEL TIPO EJERCICIO O EVALUACIÓN PARA NO HACER CONSULTAS INNECESARIAS
  }
  

  consultaPreguntas(){
    this._actividadService.consultaPreguntasRespuestas(this.actividad.actividad_id, 
      this.fechaActividad.materia_fecha_actividad_id, this.intentosRestantes, this.jwt).subscribe(
      response =>{                         
          if(response && response['status']){                                                   
            this.actividad.preguntas = response['preguntas'];
            // console.log(this.actividad);
            let fecha_actual = new Date();
            if (fecha_actual < this.actividad.fecha_inicio) {
              this.verPregunta = false;
              this.cargando = false;
            }else {
            this.verPregunta = true;
            }
            this.preguntasActividad = this.actividad.preguntas.slice();            
            this.preguntasActividad.forEach(pregunta => {
              pregunta.cargada = false;
            });            
            this.actividad.preguntas.forEach(function(pregunta){
              pregunta.valor = "";
              pregunta.calificacion = null;
              pregunta['importancia_actividad_id'] = this.actividad['importancia_actividad_id'];
              pregunta.module_load = this.setModulo(pregunta.tipo_pregunta_id);
            }.bind(this));
            if (this.edicion == 0){
              this.obtenerRespuestas();
            }            
          }else{
            this.cargando = false;
            this._materiaService.actividadesCargadas.emit({cargado: true, componente: 'actividad'})            
          }                   
      },error =>{
        console.log(<any>error)
    });
  }

  setModulo(tipo_pregunta) {
    let modulo;
    let t = tipo_pregunta
    if (t == 1) modulo = 'abiertaModule';
    else if(t == 2) modulo = 'opcionMultipleModule';
    else if(t == 3) modulo = 'relacionColumnasModule';
    else if(t == 4) modulo = 'zonaImagenesModule';
    else if(t == 5) modulo = 'dragDropModule';
    else if(t == 6) modulo = 'estrategicaModule';
    // else if(t == 7) modulo = '';
    else if(t == 8 || t == 9) modulo = 'vinculacionIdeasModule';
    else if(t == 10) modulo = 'foroModule';
    else if(t == 11) modulo = 'cargaArchivosModule';
    return modulo;
  }
  
  obtenerRespuestas(){    
    this._actividadService.consultaRespuestas(this.fechaActividad.materia_fecha_actividad_id,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.respuestas = response['respuestas'];
          this.respuestas.forEach(function(respuesta){
            this.actividad.preguntas.forEach(function(pregunta){
              if(pregunta.datos_pregunta_id == respuesta.datos_pregunta_id){
                 pregunta.valor = respuesta.valor;
                pregunta.calificacion = parseFloat(respuesta.calificacion);
              }
            });            
          }.bind(this));
        }        
      },
      error =>{
        console.log(error);
      }
    );
  }
  finalizarActividad(){
    

      alertify.confirm('Finalizar actividad','¿Deseas terminar y enviar la actividad?',
      function(){

        this._actividadService.finalizaFechaActividad(this.fechaActividad.materia_fecha_actividad_id,this.actividad.tipo_calificacion,0).subscribe(
          response =>{
              if(response && response['status']){
                console.log(response);
                
                this.edicion = 0;
                this.fechaActividad = response['materiaFechaActividad'];
                this.obtenerRespuestas();

                this.actividad.preguntas.forEach(function(pregunta){
                  pregunta.incompleto = false;
                });
                window.scrollTo(0, 0);

                this.actividadEnviada.emit(
                  {
                    'status': response['status'],
                    'fechaActividad' : response['materiaFechaActividad']
                  }
                )
                this._actividadService.actividadCompletada.emit();
            }else{
              alertify.error('falta completar actividades')
              if(response['pendientes']){
                let datosPregunta = response['pendientes'];
                this.actividad.preguntas.forEach(function(pregunta){
                  pregunta.incompleto = false;                  
                  datosPregunta.forEach(function(idDatosPregunta){
                    if(pregunta.datos_pregunta_id == idDatosPregunta)
                        pregunta.incompleto = true;
                  });
                })
                // console.log(datosPregunta);
                let id = datosPregunta[0].toString();
                document.getElementById(id).scrollIntoView();
              }
            }
          },error =>{
            console.log(<any>error)
          });
        
      }.bind(this),
      function(){
        alertify.error('Acción cancelada');
      });
  }
  
  cargarActividad( id_pregunta: any ){                 
    this.preguntasActividad.forEach(pregunta => {
      if (pregunta.datos_pregunta_id == id_pregunta) {
        pregunta.cargada = true;
      }
    });    
    this.cargando = !this.validaCarga();        
    
    if (!this.cargando) {      
      this.successCharge.emit(true);      
      this._materiaService.actividadesCargadas.emit({cargado: true, componente: 'actividad'});
    }
  }

  validaCarga(){
    let valor = true;
    this.preguntasActividad.forEach(pregunta => {
      if (pregunta.cargada == false) {
        valor = false;
      }
    });
    return valor;
  }

  setSemaforo(total, id = 0) {
    if(id == 0) {
      this.semaforo = parseInt(total);
    }else if(id == 1) {
      this.semaforo += 1;
    }    
  }

  cambiarBotonEnviar(event) {
    this.botonTerminar = event;
  }

}
