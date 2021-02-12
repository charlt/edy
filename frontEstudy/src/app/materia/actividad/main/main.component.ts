import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { ActividadService } from '../services/actividad.service';
import {TrActividad} from 'src/app/models/learning/trActividad';
import {TrMateriaFechaActividad} from 'src/app/models/learning/trMateriaFechaActividad';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RetroalimentacionService } from 'src/app/docente/retroalimentacion/services/retroalimentacion.service';
import { FechaService } from 'src/app/services/fecha.service';

declare var alertify;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainActividadComponent implements OnInit {
  idAlumno;
  idMateria;
  actividad: TrActividad = new TrActividad();
  fechaActividad:TrMateriaFechaActividad = new TrMateriaFechaActividad();
  errorFechaActividad;
  mensajeFechaActividad;

  numIntentos;
  intentosRestantes;
  
  //1 activo por fecha, 0 inactivo por fecha
  
  activoF :boolean = false;
  activoFM :boolean = false;
  // 1 a tiempo 2 antes de, 2 despues de, 0 no hay
  estadoFM;
  estadoFA;
  
  notificacionStatus;
  numeroMensajes;
  idActividadPadre;
  actividadPadreContestada: boolean;
  jwt;
  edicion;
  identModal;
  finalizaCarga = false;
  verRetro = false;
  materia: any;
  actPadre;
  actividadAnterior;
  pregContestada = true;
  estatusActividadId;
  idMateriaFAlocalS;
  changeURL;
  unica: any;
  //ocultaActividad: boolean;

  @ViewChild('content') contentRetro: NgbModalRef;
  

  segundosTotales: any;
  horas: any;
  minutos: any;
  segundos: any;
  reloj: boolean = false;
  interval: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _materiaService: MateriaService,
    private _actividadService: ActividadService,
    private _usuarioService: UsuarioService,
    private modalService: NgbModal,
    private _fechaService: FechaService,
    private _retroalimentacionService: RetroalimentacionService

  ) { }
  ngOnInit() {    
    this.jwt = this._usuarioService.getJWT();
    this.identModal = localStorage.getItem('identModal');
    localStorage.removeItem('identModal');
    this.route.params.subscribe(
      params => {
        //reinicio las variables
        this.errorFechaActividad = 0;
        this.mensajeFechaActividad = "";
        this._materiaService.actividadesCargadas.emit({cargado: false, componente: 'main'});

          const id = +params['id'];
          if(id){
            let seriacionActividad =this._materiaService.getSeriacionActividad();
            let pertenece = 0;
            seriacionActividad.forEach(function(actividades){
              if(actividades == id)
                pertenece = 1;
            })

            if(!pertenece) //la asignatura no pertenece, redirijo a la materia
              this.router.navigate(['/learning/materia/']);
            else{
              this.finalizaCarga = false
              this.fechaActividad = new TrMateriaFechaActividad();
              this.numIntentos = this.intentosRestantes = this.estadoFM = this.estadoFA = null;
              this.materia = this._materiaService.getSelectedMateria();            
              this.idMateria = this._materiaService.getSelectedMateria().materia_id;            
              this.idAlumno =this._materiaService.getSelectedMateria().alumno_id;            
              this.actividad.actividad_id = id;
              this.consultaActividad();
              let date = new Date();
              this.estadoFM = this.materia.estado;
              this.activoFM = this.materia.activa;
            }
          }
        });
        this.abreModal();
  }

  timer() {
    var self = this;
    var timer = function () {
      self.segundos = self.segundosTotales;    
      self.horas = Math.floor(self.segundos / 3600);
      self.horas = ( (self.horas < 10) ? '0': '' ) + self.horas;
      self.segundos %= 3600;
  
      self.minutos = Math.floor(self.segundos / 60);
      self.minutos = ( (self.minutos < 10) ? '0': '' ) + self.minutos;
  
      self.segundos %= 60;
      self.segundos = ( (self.segundos < 10) ? '0': '' ) + self.segundos;      
      
      if (self.segundosTotales > 0) {
        self.segundosTotales--;    
      } else {
        clearInterval(self.interval);
        self.reloj = false;        
        self._actividadService.finalizaFechaActividad(self.fechaActividad.materia_fecha_actividad_id, self.actividad.tipo_calificacion, 1).subscribe(response => {
          console.log(response);
          if (response && response['status']) {
            alertify.success(response['msg']).dismissOthers();
            location.reload();
          }
        }, error => {
          console.log(<any>error);
        });
      }
    }

    this.interval = setInterval(timer, 1000);
  }

  // timer() {
  //   this.segundos = this.segundosTotales;
  //   this.horas = Math.floor(this.segundos / 3600);
  //   this.horas = ( (this.horas < 10) ? '0': '' ) + this.horas;
  //   this.segundos %= 3600;

  //   this.minutos = Math.floor(this.segundos / 60);
  //   this.minutos = ( (this.minutos < 10) ? '0': '' ) + this.minutos;

  //   this.segundos %= 60;
  //   this.segundos = ( (this.segundos < 10) ? '0': '' ) + this.segundos;

  //   this.segundosTotales--;    
    
  //   if (this.segundosTotales > -1) {
  //     setTimeout(() => {        
  //       this.timer()
  //     }, 1000);
  //   }else {
  //     this.reloj = false;
  //     this._actividadService.finalizaFechaActividad(this.fechaActividad.materia_fecha_actividad_id,this.actividad.tipo_calificacion,1).subscribe(response => {    
  //       if (response && response['status']) {
  //         alertify.success(response['msg']).dismissOthers();
  //         location.reload();
  //       }
  //     }, error => {
  //       console.log(<any>error);
  //     });
  //   }
  // }

  abreModal(){
    if (this.identModal == 1){
      this.openLg();
      this.identModal = 0;
    }
  }

  openLg(){
    this.verRetro = true;
    this.modalService.open(this.contentRetro, {size: 'lg', windowClass: 'modal-xl'});
  }

  retroalimentacionNotif(){    
    this._retroalimentacionService.notificaciones(this.idMateria,this.actividad.actividad_id, this.jwt).subscribe(
      response =>{
        this.notificacionStatus = response['status'];
        this.numeroMensajes = response['totalMensajes'];
      },error =>{
        console.log(<any>error)
    }); 
  }

  consultaActPadre(){
    this._actividadService.consultaFechaActividadActivo(this.actividad.actividad_padre_id,this.idMateria,this.jwt).subscribe(
      response =>{ 
        if(response && response['status']){
          let fechaActividadPadre = response['fechaActividad'];
          // console.log(fechaActividadPadre)
          this._actividadService.consultaActividadPadre(this.actividad.actividad_padre_id, this.idMateria, this.jwt).subscribe(
            response =>{
              if (response && response['status']) {
                this.actividadAnterior = response['fechaActividad'];
                this.actPadre= response['actividad'][0];                
              }
              
            },error =>{
              console.log(<any>error)
          }); 
          
          if(fechaActividadPadre.estatus_actividad_id == 2 || fechaActividadPadre.estatus_actividad_id == 4){
            this.actividadPadreContestada = true;            
          }else{
            this.actividadPadreContestada = false;
          }
            
        }else{
          this.actividadPadreContestada = false;
        }

        this.registraFechaActividad(this.actividad.tipo_actividad_id);
      },error =>{
        console.log(<any>error)
    }); 
  }

  consultaActividad(){    
    this._actividadService.consulta(this.actividad.actividad_id,this.jwt).subscribe(
      response =>{
          if(response && response['status']){            
            this.actividad = response['actividad'][0];
            this.unica = this.actividad.unica; 
            
                                                         
              if(response['actividad'][0].num_intentos){
                this.numIntentos = parseInt(response['actividad'][0].num_intentos);
              }else{
                this.numIntentos = null;
              }

              if(this.idAlumno == 0){
                //alumno dummy no debe validar fechas
                this.actividad.fecha_inicio = this.actividad.fecha_fin = null;
              }

              let arreglo =this._fechaService.validaVigencia(this.actividad.fecha_inicio, this.actividad.fecha_fin,1);              
            
              this.actividad.fecha_inicio = new Date(parseInt(this.actividad.fecha_inicio)*1000);
              this.actividad.fecha_fin = new Date(parseInt(this.actividad.fecha_fin)*1000);              
              
                this.estadoFA = arreglo[1];
                this.activoF = arreglo[0];

              //CÓDIGO DE ACTIVIDAD PADRE
              this.idActividadPadre = this.actividad.actividad_padre_id;
              if(this.idActividadPadre == '0') this.idActividadPadre = null;
              
              
                if (this.idActividadPadre) {
                  this.consultaActPadre();
                }else{
                  this.registraFechaActividad(this.actividad.tipo_actividad_id);
                  this.actividadPadreContestada = false;
                }              
          }
      },error =>{
        console.log(<any>error)
    }); 
  }

  
  registraFechaActividad(idTipoActividad){
    
    if (this.interval) clearInterval(this.interval);
    if (this.reloj) this.reloj = false;
        
    if (this.estadoFA == 2 || this.estadoFM == 2) {            
      this.edicion = 0;
      this.fechaActividad.estatus_actividad_id = 1;
      this.finalizaCarga = true;  
      this._materiaService.actividadesCargadas.emit({cargado: true, componente: 'main'});              
    }else {    
      this._actividadService.registraFechaActividad( this.actividad.actividad_id,this.idMateria,idTipoActividad, this.jwt).subscribe(
        response =>{
            if(response && response['status']){
              if(response['materiaFechaActividad'].estatus_actividad_id == 1){
                this.intentosRestantes = this.numIntentos - parseInt(response['materiaFechaActividad'].intento_num)+1;
              }else{
                this.intentosRestantes = this.numIntentos - parseInt(response['materiaFechaActividad'].intento_num);
              }
              if(this.intentosRestantes < 0)
                this.intentosRestantes = 0;
              this.fechaActividad = response['materiaFechaActividad'];
              
                if((this.fechaActividad.estatus_actividad_id  == 1 || this.fechaActividad.estatus_actividad_id  == 5 || this.fechaActividad.estatus_actividad_id  == 7 ) 
                  && ((this.activoF  &&this.activoFM) || (this.fechaActividad.estatus_actividad_id == 5))
                  && (!this.idActividadPadre || (this.idActividadPadre && this.actividadPadreContestada)) && this.materia.validacion == 1
                  ) //&& this.actPadre == 0 || this.actPadre != undefined
                    this.edicion = 1
                  else
                    this.edicion = 0;

                    this.identModal= localStorage.getItem('identModal');
                    localStorage.removeItem('identModal');
                    this.abreModal();
                    this.retroalimentacionNotif();

                  
                  let fin = this.actividad.fecha_fin.getTime();
                  let hoy = new Date().getTime();

                  this.segundosTotales = ((fin - hoy) / (1000)).toFixed();
                  
                  if (this.segundosTotales <= 28800 && this.segundosTotales > 0) {
                    console.log(this.segundosTotales);
                    
                    this.timer();
                    this.reloj = true;
                  }  

                  this.finalizaCarga = true; 
                  this._materiaService.actividadesCargadas.emit({componente: 'main', actividad: this.actividad})               
            }else{
              this._materiaService.actividadesCargadas.emit({cargado: true, componente: 'main'});
              this.errorFechaActividad = 1;
              this.mensajeFechaActividad = response['msg']
            }
        
        },error =>{
          console.log(<any>error)
      });   
    }  
  }

  refrescaHeader(event){
    if(event.status == 1){
      this.fechaActividad = event.fechaActividad
      this.edicion = 0;
      if(this.intentosRestantes > 0 )
        this.intentosRestantes--;
    }
  }

  reintentarActividad(){

    alertify.confirm('Reintentar actividad','Al realizar esta acción <strong>renuncias a la calificación</strong> que obtuviste ¿estás seguro?',
    function(){
      
    let intento = parseInt(this.fechaActividad.intento_num) + 1;
    this._actividadService.reintentaActividad( this.actividad.actividad_id,this.idMateria, intento, this.actividad.tipo_actividad_id, this.jwt).subscribe(
      response =>{
          if(response && response['status']){
            this.fechaActividad = response['materiaFechaActividad'];
            this.edicion = 1;
            this._actividadService.actividadCompletada.emit();
        }
      },error =>{
        console.log(<any>error)
      });
    }.bind(this),
    function(){
      alertify.error('Acción cancelada');
    });
  }
 
  siguienteActividad(){
    let nextIdActividad = this._actividadService.siguienteActividad(this.actividad.actividad_id);
         
   if(nextIdActividad)
     this.router.navigate(['/materia/actividad/'+nextIdActividad]);
   else
     this.router.navigate(['/materia/home']);
}

openModalRetro(content) {
  this.verRetro = true;
  this.notificacionStatus = 0;
  this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
  }, (reason) => {
  });
}

openModalRubrica(content) {
  this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'});
}

/*comienzaActividad() {
  this.ocultaActividad = false;
}*/

ngOnDestroy() {
  clearInterval(this.interval)
}

}
