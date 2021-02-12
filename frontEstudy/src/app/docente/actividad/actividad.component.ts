import { Component, OnInit, ViewChild, HostListener, OnDestroy} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActividadService } from 'src/app/materia/actividad/services/actividad.service';
import { simpleEditor} from '../../../../../frontEstudy/src/app/models/simpleEditor';
import { Alumno  } from 'src/app/models/controlEscolar/trAlumno';
import { TrActividad  } from 'src/app/models/learning/trActividad';
import { TrMateriaFechaActividad  } from 'src/app/models/learning/trMateriaFechaActividad';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { PortafolioEvidenciasService } from 'src/app/materia/actividad/services/portafolio-evidencias.service';
import {metrica} from '../../services/metricaCalificacion';
// import { DOCUMENT } from '@angular/common'; 


declare var alertify: any;

@Component({
  selector: 'app-actividad-docente',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadDocenteComponent implements OnInit, OnDestroy {

  title: string;
  jwt;

  idActividad;
  idMateria;

  actividades;
  alumno: Alumno = new Alumno();
  actividad: TrActividad = new TrActividad();
  fechaActividad: TrMateriaFechaActividad = new TrMateriaFechaActividad();
  idMateriaFechaActividad;
  tipo;
  idAlumno;
  idPersona;
  idRol;
  correccion;
  calificacionBorrador = null;
  actividadesCalculadora;
  calificacionTotalAsignatura;
  retroalimentacion;
  metricaCalif;
  identModal;
  finalizaCarga = false;
  verRetro = false;
  verNota=false;
  verCalculadora= false;

  simpleEditor = simpleEditor;
  portafolio: any;
  pasoPortafolio = null;
  calificacionPortafolioBorrador = "";
  identificador;

  respuestasAlumno: any;
  bandera: boolean = true;
  mostrarInstruccion: boolean = false;
  idSituacionAsignaturaGrupo;

  @ViewChild('contentModalRubrica') contentModalRubrica: NgbModalRef;
  @ViewChild('contentModalRetro') contentModalRetro: NgbModalRef;


  constructor(
    private _usuarioService: UsuarioService,
    private _actividadService: ActividadService,
    private _materiaService: MateriaService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private _portafolioService: PortafolioEvidenciasService,
  ) {
    this.title = 'Consulta de actividad';
    this.idActividad = this.route.snapshot.paramMap.get('id1');
    this.idMateria = this.route.snapshot.paramMap.get('id2');
    // this.id_Alumno= this.route.snapshot.paramMap.get('id3');
    this._usuarioService.pushBreadcum(this.title,"",2);        
  }

  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  changeURL: any;
  pendientes: Array<any> = [];

    @HostListener('window:scroll', [])
    onWindowScroll() 
    {
      if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
      {
          this.showScroll = true;
      } 
      else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
      { 
        this.showScroll = false; 
      }
    }

   scrollToTop() 
    { 
      (function smoothscroll() 
      { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        if (currentScroll > 0) 
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
    }

  ngOnInit() {
    if (sessionStorage.getItem('situacionAsignaturaGrupo')) 
    this.idSituacionAsignaturaGrupo = sessionStorage.getItem('situacionAsignaturaGrupo');
    
    this.jwt = this._usuarioService.getJWT(); 
    this.metricaCalif = metrica;
    this.identModal= localStorage.getItem('identModal');
    localStorage.removeItem('identModal')
    /*window.onscroll = function() {
      if (window.pageYOffset > sticky) {

        // console.log(sticky,',',window.pageYOffset)
        calif.classList.add("sticky");
      } else {
        calif.classList.remove("sticky");
      }
    };*/
    //var calif = document.getElementById("scroll");
    //var sticky = calif.offsetTop;

    this._actividadService.actividadCalificada.subscribe(response =>{      
      this.obtieneCalificacion();
    });

    this.getActividad();    
    this.changeURL = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd){                        
        this.idActividad = this.route.snapshot.paramMap.get('id1');
        this.idMateria = this.route.snapshot.paramMap.get('id2');
        this.identModal= localStorage.getItem('identModal');
        localStorage.removeItem('identModal');
        this.calificacionBorrador = null;
        this.finalizaCarga = false;
        this.verRetro = false;
        this.verNota = false;
        this.verCalculadora = false;
        this.pasoPortafolio = null;
        this.calificacionPortafolioBorrador = "";
        this.getActividad();
      }
    });  
  }


  openLg(){
    this.verRetro = true;
    this.modalService.open(this.contentModalRetro, {size: 'lg', windowClass: 'modal-xl'});
    this.identModal = 0;
  }

  getActividad(){
    this._actividadService.consulta(this.idActividad,this.jwt).subscribe(response =>{      
      if(response && response['status']){        
        this.actividad = response['actividad'][0];        
        this.getPendientes(); 
        this.consultaAlumno();      
        this.consultaActividad();   
        if (this.actividad.tipo_actividad_id == 3) {
          this.consultaPortafolio();
        }
      }
    },error =>{
      console.log(<any>error)
    });
  }

  getPendientes(){
    this.pendientes = [];
    this._actividadService.consultaPendientes(this.jwt, this.idActividad, this.idMateria).subscribe(response =>{ 
      if(response && response['status']){
        if (response['pendientes'] > 0) {
          this.pendientes.push({anterior: response['pendienteAnterior']});
          this.pendientes.push({siguiente: response['pendienteSiguiente']});
        }
      }
    },error =>{
      console.log(<any>error)
    });
  }

  consultaActividad() {
    this._actividadService.consultaFechaActividadActivo(this.idActividad,this.idMateria,this.jwt).subscribe(
      response =>{
        if(response && response['status']){
          this.fechaActividad = response['fechaActividad'];   
          this.finalizaCarga = true;
          if(this.fechaActividad.estatus_actividad_id == 3) this.obtieneCalificacion();
          this.retroPendiente();
          if(this.identModal)
            this.openLg();
        }else{
          this.fechaActividad = null;
        }
      },error =>{
        console.log(<any>error);
      }) 
  }

  consultaPortafolio(){
    this.pasoPortafolio = 0; //inicializa el paso del portafolio
      this._portafolioService.consultaRespuestas(this.idActividad, this.fechaActividad.materia_fecha_actividad_id, this.jwt).
      subscribe(response =>{
        if (response && response['status']) {
          this.portafolio = response['respuestas'];
          this.pasoPortafolio = this.portafolio.paso;
        }
      }, error => {
        console.log(<any>error)
    });
  }

  
  
  consultaAlumno() {
    this._materiaService.consultaAlumno(this.idMateria,this.jwt).subscribe(response => {
      if(response && response['status']){
        this.alumno = response['alumno'];
        this.idAlumno = this.alumno.alumno_id                  
      }
    },error=>{
      console.log(<any>error)
    });
  }
  
  retroPendiente(){ 
    this._actividadService.consultaRetro(this.jwt,this.fechaActividad.actividad_id,this.fechaActividad.materia_id).subscribe(
      response =>{        
        if(response && response['status'] == 1 ){
          this.retroalimentacion = response['numero_mensajes'];
        }
        this.bandera = true;
      },error =>{
        console.log(<any>error);
      }) 
  }

  obtieneCalificacion(){
    this._actividadService.consultaRespuestas(this.fechaActividad.materia_fecha_actividad_id,this.jwt).subscribe(
      response =>{        
        let respuestas, tmpCalif = 0.0;
        if(response && response['status']){
          respuestas = response['respuestas'];

          respuestas.forEach(function(respuesta){
            tmpCalif += parseFloat(respuesta.calificacion)
          });
          this.calificacionBorrador =tmpCalif.toFixed(2);
          
          if (this.calificacionBorrador >= 9.98) this.calificacionBorrador = Number(10).toFixed(2);                    
          // if (id) {
          this.fechaActividad.calificacion = this.calificacionBorrador;
          // }
        }        
      }
    )

  }

  verNotas(){
    this.router.navigate(['/docente/notas/'+this.idActividad,this.idMateria]);
  }

  openModalRetro(content) {
    this.verRetro = true;
    this.retroalimentacion = null
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
    }, (reason) => {
    });
  }

  openModalNotas(content) {
    this.verNota = true;
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
    }, (reason) => {
    });
  }
  openModalCalculadora(content){
    this.verCalculadora = true;
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
    }, (reason) => {
    });
  }

  openModalCorreccion(content,texto) {
    // this._actividadService.correcci||onActividad(this.idMateriaFechaActividad,this.idPersona,texto,this.idRol,this.jwt).subscribe(
    //   response =>{
    //     if(response && response['status']){

    //       this.correccion;
          
    //     }
    //   },error =>{
    //     console.log(<any>error)
    //   });
    // this.verCorreccion = true;
    if(this.fechaActividad){
      this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
      }, (reason) => {
      });
    }else{
      alertify.confirm('Reintentar actividad', '¿Deseas darle un reintento a este alumno?', function(){     
          this._actividadService.correccionActividad(this.idActividad,this.idMateria).subscribe(response =>{
            if (response && response['status']) {
              alertify.success(response['msg']).dismissOthers();
            }
          }, error => {
            console.log(<any>error)
          });
    }.bind(this),
    function(){
      alertify.error('Acción cancelada');   
    });
    }
    
  }

  correccionCorrecta(event){
    if(event){
      this.fechaActividad.estatus_actividad_id=5;
      this.calificacionBorrador = null;
    }
  }

  openModalInvalido(content,texto) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
    }, (reason) => {
    });
  }
  invalidacionCorrecta(event){
    if(event){
      this.fechaActividad.estatus_actividad_id=6;
    }
  }

  guardarCalificacion() {      
    
    let idMateriaFecha = this.fechaActividad.materia_fecha_actividad_id;    

    if(this.actividad.tipo_calificacion == '2'){
      
      this.modalService.open(this.contentModalRubrica, {size: 'lg', windowClass: 'modal-xl'});
    }else{
          alertify.confirm('Guardar calificación', '¿Desea guardar la calificación?', function(){
              this._actividadService.consultaFaltantes(idMateriaFecha, this.jwt).subscribe(response =>{                   
                if (response && response['status']) {                  
                  this._actividadService.guardarCalificacion(idMateriaFecha, this.jwt).subscribe(response =>{                    
                    if (response && response['status']) {
                      this.consultaActividad();
                      alertify.success("Se insertó la calificación correctamente").dismissOthers();
                    }
                    }, error => {
                      console.log(<any>error)
                    });
                }else{
                  this.actividad.preguntas.forEach(pregunta => {
                    pregunta.incompleto = false;
                    response['actividades'].forEach(id_pregunta => {
                      if (pregunta.datos_pregunta_id == id_pregunta) {
                        pregunta.incompleto = true;
                      }
                    });
                  });
                  alertify.error("Hay actividades pendientes de calificar").dismissOthers();
                }
                }, error => {
                  console.log(<any>error)
                });
          }.bind(this),
          function(){
            alertify.error('Acción cancelada');
          });
      }

  }

  
  guardarCalificacionPortafolio() {  
    
    let idMateriaFecha = this.fechaActividad.materia_fecha_actividad_id;
    
    alertify.confirm('Guardar calificación', '¿Desea guardar la calificación para el portafolio?', function(){
        
            this._actividadService.guardarCalificacionPortafolio(idMateriaFecha,this.calificacionPortafolioBorrador, this.jwt).subscribe(response =>{
              if (response && response['status']) {
                this.consultaActividad();
                alertify.success(response['msg']).dismissOthers();
              }
            }, error => {
              console.log(<any>error)
            });
    }.bind(this),
    function(){
      alertify.error('Acción cancelada');
    });
  }
  

  aprobarPortafolio(){

    let idMateriaFecha = this.fechaActividad.materia_fecha_actividad_id;
    let bandera = true;
    this.respuestasAlumno.forEach(respuesta => {
      if (respuesta.validado == '0') {
        bandera = false;
      }
    });
    
      if (bandera) {
        alertify.confirm('Aprobar portafolio', '¿Desea aprobar el portafolio?', function(){
        this._actividadService.aprobarPortafolio(idMateriaFecha, this.jwt).subscribe(response =>{
          if (response && response['status']) {
            this.consultaActividad();
            alertify.success("Se aprobó el portafolio correctamente").dismissOthers();
          }
          }, error => {
            console.log(<any>error)
        });
      }.bind(this),
      function(){
        alertify.error('Acción cancelada');
      });
    }else{
      alertify.error("Hay aprobaciones pendientes").dismissOthers();
    }

  }

  getRespuestasAlumno(evt: any){
    this.respuestasAlumno = evt;
  }

  calculadoraPromedios(){
    console.log(this.idMateria)
  }

  reevaluarCalificacion(){
        
    alertify.confirm('Reevaluar calificación', '¿Deseas reevaluar esta calificación?', function(){
      this._actividadService.reevaluarCalificacion(this.fechaActividad.materia_fecha_actividad_id, this.jwt).subscribe( response => {
        
        if (response && response['status']) {
          this.consultaActividad();
          alertify.success("Acción realizada satisfactoriamente").dismissOthers();
        }
      }, error => {
        console.log(<any>error);
      });
    }.bind(this),
    function(){
      alertify.error('Cancelado');
    });
  }

  porcentajeRubrica(total: number) {        
    this.modalService.dismissAll();
    this.fechaActividad.estatus_actividad_id = 4;
    this.calificacionBorrador = total;
    this.fechaActividad.calificacion = total.toString();
  }

  cambiaActividad(tipo){
    let datos = null;
    if (tipo == 0) {
      datos = this.pendientes.find(r => r.anterior)
      if (datos) datos = datos.anterior
    }else if (tipo == 1) {
      datos = this.pendientes.find(r => r.siguiente);
      if (datos) datos = datos.siguiente;
    }
    if (datos) {
      this.router.navigate(['/docente/actividad/'+ datos.actividad_id + '/' + datos.materia_id])
    }    
  }

  ngOnDestroy(){
    this.changeURL.unsubscribe();
  }

  mostrar(evt) {
    this.mostrarInstruccion = evt.target.checked;    
  }

}
