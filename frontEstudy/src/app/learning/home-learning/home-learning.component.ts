import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL }  from '../../services/global';
import { ControlActividadService } from 'src/app/administracion/carga-actividades/services/control-actividad.service';

// import { Privilegios} from "src/app/models/learning/privilegiosLearning";
import { MateriaService } from 'src/app/services/materia.service';
import { PlataformaService } from 'src/app/services/plataforma.service';
import { VideoConferenciaService } from 'src/app/docente/video-conferencia/services/video-conferencia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlumnoService } from 'src/app/services/alumno.service';

declare var alertify;

@Component({
  selector: 'app-home-learning',
  templateUrl: './home-learning.component.html',
  styleUrls: ['./home-learning.component.scss'],
  animations: [slideToTop()]
})
export class HomeLearningComponent implements OnInit {
  jwt;
  usuario;
  identity
  url;
  urlLeave;
  urlImg;
  ultimaActividad;
  private title: string;
  public sliders: Array<any> = [];
  videoconferenciasDisponibles;
  conferenciaSelected; 
  cargandoVideoconferencias = false;
  notifPendientes;
  joinurl;
  passwordZoom;
  Encuestas: any;
  idEncuesta;

  idSituacionAlumno;
  idSituacionPago;
  respuestasTicket: any;
  privilegios;
  tipoConferencia: number;

  @ViewChild("modalVideo") modalVideo : ElementRef;


  constructor(
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _router: Router,
    private _actividadService: ControlActividadService,
    private _materiaService: MateriaService,
    private _plataformaService: PlataformaService,
    private _conferenciaService: VideoConferenciaService,
    private modalService: NgbModal,
    private _alumnoService: AlumnoService
) { 
      this.title = "";
      this._usuarioService.pushBreadcum(this.title,'/learning/home',1);
      this._usuarioService.removeBreadcum(2);
      this.url = GLOBAL.urlAssets;
      this.urlLeave = GLOBAL.urlAssets + '/estudy/';
  }
  
  ngOnInit() {
    if (localStorage.getItem('prevUrl')) localStorage.removeItem('prevUrl');
    localStorage.setItem('prevUrl', this._router.url);    

    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    
    if (this.identity.url_perfil) {
      this. urlImg = this.url + this.identity.url_perfil
    }else{
      this.urlImg = 'assets/images/learning/usuarios.png'
    }

    this.privilegios = this._alumnoService.getprivilegiosAlumno();
    this.idSituacionAlumno = this._alumnoService.getSituacionAlumno();
    this.idSituacionPago = this._alumnoService.getSituacionPago();

    this._alumnoService.infoPlataformaCargada.subscribe(
      (response) => {
          this.privilegios = response['privilegios']
          this.idSituacionAlumno = response['idSituacionAlumno'];
          this.idSituacionPago = response['idSituacionPago'];
      }
    );
    

      
    this.consultaActividad();
    this.consultaConferenciasActivas();
    this.consultaNotifAsig();
    this.sliders.push(
      {
          imagePath: 'http://201.149.57.130:8080/plataforma/learning/img/carrusel/banner_promocion.png',
          label: 'First slide label',
          text:
              'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
          imagePath: 'http://201.149.57.130:8080/plataforma/learning/img/carrusel/app.png?ver=2019',
          label: 'Second slide label',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
          imagePath: 'http://201.149.57.130:8080/plataforma/learning/img/carrusel/siguenos.png?ver=2019',
          label: 'Third slide label',
          text:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
    );

 
    
  


  
  }

 


    consultaNotifAsig(){
      this._materiaService.consultaNotif(this.identity.alumno.alumno_id).subscribe(
        response =>{
              if(response && response['status']){
                this.notifPendientes = response['notificaciones'];
                this.notifPendientes.forEach(notificacion => {
                  notificacion.fecha_fin = new Date(notificacion.fecha_fin * 1000)
                });
            }
        },error =>{
          console.log(<any>error)
        });
      }

    onLoggedout() {
      this._usuarioService.guardaFechaUltSesion(this.identity.usuario_id).subscribe(
          response =>{
              if(response && response['status']){
              }
          },error =>{
              console.log(<any>error)
          });
          this.modalService.dismissAll()
          localStorage.removeItem('identity');
          localStorage.removeItem('jwt');
          localStorage.removeItem('privilege');
          localStorage.removeItem('selectedRol');
          localStorage.removeItem('expirationDate');
    }

  consultaActividad(){
    this._actividadService.consultaActActual(this.jwt).subscribe(
      response =>{
        // console.log(response);
            if(response && response['status']){
              this.ultimaActividad = response['actividad'];
          }
      },error =>{
        console.log(<any>error)
      });
  }

  // private interval;


  consultaConferenciasActivas(id = 0){
    this.cargandoVideoconferencias = true;
    this._plataformaService.consultaConferenciasActivas().subscribe(response=>{                  
      if(response && response['status']){
        this.videoconferenciasDisponibles = response['conferencias'];
        let time = new Date().getTime();
        this.videoconferenciasDisponibles.forEach(conferencia => {
          conferencia['fecha_inicio'] = new Date(conferencia['fecha_inicio']*1000);
          conferencia['fecha_fin'] = new Date(conferencia['fecha_fin']*1000);

          let fecha_inicio = conferencia['fecha_inicio'].getTime();          
          if (time >= fecha_inicio) {     
            conferencia['disponible'] = true;      
          }else {   
            conferencia['disponible'] = false;      
          }
        });        
      }
      this.cargandoVideoconferencias = false;
      // if (id == 0) {
      //   this.interval = setInterval(() => {
      //     this.consultaConferenciasActivas(1);
      //   }, 30000)
      // }
    },error=>{
      console.log(error)
    }
    )
  }

  irmateria(id_materia, id_actividad){
    this._materiaService.seleccionaMaterias(this.identity.persona_id, 3).then(
      (data:any)=>{
        this._materiaService.seleccionaMateria(id_materia, this.jwt).then(
          (data:any)=>{
            this._router.navigate(['/materia/actividad/'+id_actividad]);
          }
        );
      }
    )        
  }

  // consultaConferencia(id){

  // }

  videoConferencia() {    
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    // console.log(this.conferenciaSelected);
    
    this._conferenciaService.insertaAcceso(this.jwt,this.conferenciaSelected.videoconferencia_id,this.identity.persona_id).subscribe(
      response =>{        
      },error=>{
        console.log(error)
      }
    )
    
    if (this.tipoConferencia == 0) {
      localStorage.setItem('docente', JSON.stringify(this.conferenciaSelected));
      localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
      localStorage.setItem('passwordZoom', JSON.stringify(this.passwordZoom));

      var newTab = window.open('', '_blank');
      newTab.location.href = 'assets/zoom/';
    }else if (this.tipoConferencia == 1) {      
      var newTab = window.open('', '_blank');
      newTab.location.href = this.conferenciaSelected['url_meet'];
    }
    
    // window.open("http://localhost:4200/assets/zoom/", "_blank");

    // localStorage.setItem('docente', JSON.stringify(conferencia));
    // localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));

    //this.insertaAcceso();
    
 
    /*this._conferenciaService.videoconferenciaDisponible(this.jwt, this.idMateria).subscribe(response => {       
      if (response && response['status']) {
        // console.log(response);
        this.datosConferencia = response['videoconferencia'];
        this.idVideoconferencia = this.datosConferencia['videoconferencia_id'];
        this.docente = this.datosConferencia['docente'];
        this._conferenciaService.consulta(this.jwt, this.docente['persona_id']).subscribe(response => { 
          // console.log(response);
          if (response && response['status']) {
            this.datosDocente = response['usuario'];
            localStorage.setItem('docente', JSON.stringify(this.datosDocente));
            localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
            newTab.location.href = 'assets/zoom/';
            this.insertaAcceso();
          }      
        }, error => {
          console.log(<any>error);
        });
        this._conferenciaService.insertaAcceso(this.jwt,this.idVideoconferencia,this.identity.persona_id).subscribe(
          response =>{
            
          },error=>{
            console.log(error)
          }
        )
      }      
    }, error => {
      console.log(<any>error);
    });*/

  }

  insertaAcceso(idVideoconferencia) {
    this._conferenciaService.insertaAcceso(this.jwt, idVideoconferencia, this.identity['persona_id']).subscribe(response => { 
      if (response && response['status']) {
      }      
    }, error => {
      console.log(<any>error);
    });
  }

      
  consultaVideoConferencia(conferencia){
    this.conferenciaSelected = conferencia;

    if (this.conferenciaSelected['url_meet'] == '' || this.conferenciaSelected['url_meet'] == null
      || this.conferenciaSelected['url_meet'] == undefined) {
      this.tipoConferencia = 0;
      this._conferenciaService.consultaMeet(this.conferenciaSelected.videoconferencia_id).subscribe(
        response =>{
          this.joinurl = response['join_url'];
          if(response['password']){
            this.passwordZoom = response['password'];
          }else{
            this.passwordZoom = '';
          }
          this.modalService.open(this.modalVideo, {size: "lg"});
        },error =>{
          alertify.error('No se puede acceder a la videoconferencia');
          console.log(<any>error);
      });
    }else {
      this.tipoConferencia = 1;
      this.modalService.open(this.modalVideo, {size: "lg"});
    }
    
  }

 

  closeModal() {
    this.modalService.dismissAll();
    this._router.navigate(['/learning/home/']); 
  }

}


