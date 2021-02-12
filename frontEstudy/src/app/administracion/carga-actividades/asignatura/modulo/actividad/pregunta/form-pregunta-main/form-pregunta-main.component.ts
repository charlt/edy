import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatModulos } from 'src/app/models/learning/catModulos';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaService } from 'src/app/administracion/carga-actividades/services/pregunta.service';
import { Location } from '@angular/common';
import { ActividadService } from 'src/app/administracion/carga-actividades/services/actividad.service';
@Component({
  selector: 'form-pregunta-main',
  templateUrl: './form-pregunta-main.component.html',
  styleUrls: ['./form-pregunta-main.component.scss']
})
export class FormPreguntaMainComponent implements OnInit {
  
  @ViewChild('t') t: NgbTabset;
  idActividad;

  @Output() sucessEvent = new EventEmitter<any>();
  @Output() backEvent = new EventEmitter<any>();

  jwt : string;
  Modulo: Array<CatModulos> = new Array<CatModulos>();

  idDatosPregunta;
  idTipoPregunta;
  idPregunta;
  datosPregunta;
  tokenDatosPregunta = false;
  ponderacion;

  title;
  actividad: any;

  constructor(
    private _usuarioService : UsuarioService,
    private _preguntaService : PreguntaService,
    private _route: ActivatedRoute,
    private router: Router,
    private _actividadService: ActividadService
  ) { }

  ngOnInit() {    
    
    this.idDatosPregunta = this._route.snapshot.params['id'];    
    this.idActividad = this._route.snapshot.parent.parent.params['id'];
    if(!this.idDatosPregunta){
      this.title='Nueva pregunta'
    }
    this.jwt = this._usuarioService.getJWT();

    this._actividadService.consultaActividad(this.idActividad,this.jwt).subscribe(
      response =>{        
        if(response && response['status']){
          this.actividad = response['actividad'][0];
          if(this.idDatosPregunta){
            this._preguntaService.consulta(this.idDatosPregunta,this.jwt).subscribe(
              response=>{
                if(response && response['status']){
                  this.datosPregunta = response['pregunta'];
                  this.idTipoPregunta = this.datosPregunta.tipo_pregunta_id;
                  this.idPregunta = this.datosPregunta.pregunta_id;
                  this.tokenDatosPregunta = true;
                }
              },error=>{
                console.log(error)
              }
            )
            this.ponderacion;
          }else{
            this.datosPregunta = null;
            this.tokenDatosPregunta = true;
          }
        }
      },error=>{
        console.log(error)
    });  
  }

  siguientePregunta(event){           
    if(event.status){
      let tab = 'tab-pregunta2';
      if(event.idDatosPregunta){
        this.sucessEvent.emit({ 'status': 1 });
        this.idDatosPregunta = event.idDatosPregunta;
        this.idTipoPregunta = event.idTipoPregunta;        
      }
      if (event.datos) {
        let datos = event.datos;
        if (this.datosPregunta) {
          if (this.datosPregunta.ponderacion) this.datosPregunta.ponderacion = parseFloat(datos.ponderacion).toFixed(2)
          if (this.datosPregunta.dificultad) this.datosPregunta.dificultad = datos.dificultad
          if (this.datosPregunta.aleatorio) this.datosPregunta.aleatorio = datos.aleatorio
          if (this.datosPregunta.retroalimentacion) this.datosPregunta.retroalimentacion = datos.retroalimentacion  
        }else{
          this.datosPregunta = {};
          this.datosPregunta.datos_pregunta_id = event.idDatosPregunta
          this.datosPregunta.tipo_pregunta_id = event.idTipoPregunta
          this.datosPregunta.ponderacion = parseFloat(datos.ponderacion).toFixed(2)
          this.datosPregunta.dificultad_id = datos.dificultad
          this.datosPregunta.shuffle = datos.aleatorio
          this.datosPregunta.retroalimentacion = datos.retroalimentacion
          this.datosPregunta.reactivos = event.reactivos;
        }        
      }
      setTimeout(() => {        
        this.t.select(tab);
      }, 100);
    }
  }

  finalizarGuardado(event){    
    console.log(event)
    if(event.status){
      if(event.idPregunta){
        
        this.idPregunta = event.idPregunta;
        
      }
      let reactivos = parseInt(this.datosPregunta.reactivos)
      if (reactivos == 1) {
        
        setTimeout(() => {
          this.t.select('tab-pregunta3');
        }, 100);
      }else {            
        
        this.router.navigate(['./'],{ relativeTo: this._route.parent.parent });

      }
    }
  }
  
  reactivosGuardados(evt: any) {    
    this.router.navigate(['./'],{ relativeTo: this._route.parent.parent });
  }
    
}
