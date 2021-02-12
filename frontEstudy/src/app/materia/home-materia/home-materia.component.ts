import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GLOBAL } from '../../services/global';
import { MateriaService } from 'src/app/services/materia.service';
import { TrMateria }  from '../../models/learning/trMateria';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { VideoConferenciaService } from '../../docente/video-conferencia/services/video-conferencia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var alertify;

@Component({
  selector: 'app-home-materia',
  templateUrl: './home-materia.component.html',
  styleUrls: ['./home-materia.component.scss']
})
export class HomeMateriaComponent implements OnInit {
  jwt: string;
  materia: TrMateria;
  docente;
  seriacionActividad;
  asignatura_id;

  urlImg;
  url;
  urlImgDocente;
  bibliografia_desc: SafeHtml;
  evaluacion_desc: SafeHtml;
  objetivos_desc: SafeHtml;
  bienvenida_desc: SafeHtml;
  fechaValidaInicio = false;
  fechaValidaFin = false;
  sinFecha = true;
  materia_id;
  asignatura;
  closeResult: string;
  urlCurriculum;
  Videoconferencias: any;
  urlZoom: string;
  passwordZoom: string;
  urlLeave: string;
  conferencia: any;
  url_contenido;
  Calificaciones: any;

  @ViewChild('modalConferencia') modalConferencia: ElementRef;

  constructor(
    private _materiaService: MateriaService,
    private _usuarioService: UsuarioService,
    private _sanitizer : DomSanitizer,
    private _conferenciaService: VideoConferenciaService,
    private modalService: NgbModal
  ){
    this.url = GLOBAL.urlAssets;
    this.urlZoom = GLOBAL.urlAssets + '/assets/zoom/';
    this.urlLeave = GLOBAL.urlAssets +'/estudy/' ;
   }
   

  ngOnInit() {
    this._materiaService.actividadesCargadas.emit({cargado: true, componente: 'home-materia'});
       
    this.inicializaHome()
    this._materiaService.materiaActualizada.subscribe(
      (response) => {
        this.inicializaHome();
      }
    );
        
  }
  inicializaHome(){
    this.jwt = this._usuarioService.getJWT();
    this.materia = this._materiaService.getSelectedMateria();       
    if(this.materia.url_contenido)
    this.url_contenido = this.url + this.materia.url_contenido
    else
      this.url_contenido = null;
      
    this.docente = this._materiaService.getSelectedMateria().docente;
    if(this.docente)this.urlCurriculum = this.url + this.docente.url_curriculum;
    this.materia_id = this.materia.materia_id;
    //  console.log(this.materia);
    //  console.log(this.docente);
    if(this.docente){
    this.docente.url_perfil =  this.docente.url_perfil ? this.url + this.docente.url_perfil : null;        
    }
    // if (!this.materia){ 
    //   this.router.navigate(['materia/auth']);
    // }
    this.asignatura_id = this.materia.asignatura_id;
    this.actualizaInfoMateria();
  }

  actualizaInfoMateria(){
    this.materia = this._materiaService.getSelectedMateria();
    this.materia_id = this.materia_id;
    this.seriacionActividad = this._materiaService.getSeriacionActividad();
    this.bibliografia_desc = this.htmlProperty(this.materia.bibliografia_desc);
    this.evaluacion_desc = this.htmlProperty(this.materia.evaluacion_desc);
    this.objetivos_desc = this.htmlProperty(this.materia.objetivos_desc);
    this.bienvenida_desc = this.htmlProperty(this.materia.bienvenida_desc);

    if(this.materia.url_imagen){
      this.urlImg = this.url + this.materia.url_imagen; 

     }else{
      this.urlImg =  "assets/images/learning/bannermateria.jpeg"; 
     }
     
    this.consultaConferenciaMateria();
    this.consultaCalificaciones();    

  }

  consultaConferenciaMateria() {
    this._conferenciaService.consultaConferenciasMateria(this.jwt, this.materia_id).subscribe(response => {  
      if (response && response['status']) {        
        this.Videoconferencias = response['conferencias'];        
      }      
    }, error => {
      console.log(<any>error);
    });
  }

  consultaCalificaciones() {
    this._materiaService.getCalificaciones(this.materia_id).subscribe(response => {  
      if (response && response['status']) {      
        this.Calificaciones = response['calificaciones'];  
      }      
    }, error => {
      console.log(<any>error);
    });
  }
    
  htmlProperty(html) : SafeHtml { 
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  identity: any;
  idMateria: number;
  datosConferencia;
  idVideoconferencia: number;
  datosDocente: any;

  videoConferencia(id) {
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();
    this._conferenciaService.insertaAcceso(this.jwt,this.conferencia.videoconferencia_id,this.identity.persona_id).subscribe(
      response =>{        
      },error=>{
        console.log(error)
      }
    )
    if (id == 0) {
      localStorage.setItem('docente', JSON.stringify(this.conferencia));
      localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
      localStorage.setItem('passwordZoom', JSON.stringify(this.passwordZoom));

      var newTab = window.open('', '_blank');  
      newTab.location.href = 'assets/zoom/';
    }else if (id == 1) {
      let url = this.urlZoom;
      var newTab = window.open(url, '_blank');  
    }


  }

  consultaVideoConferencia(conferencia){
    this.conferencia = conferencia;
    this._conferenciaService.consultaMeet(conferencia.videoconferencia_id).subscribe(
      response =>{
        console.log(response)
        this.modalConferencia
        this.urlZoom = response['join_url'];
        if(response['password']){
          this.passwordZoom = response['password'];
        }else{
          this.passwordZoom = '';
        }
        this.modalService.open(this.modalConferencia, {size: "lg"});        
      },error =>{
        alertify.error('No se puede acceder a la videoconferencia');
        console.log(error)
      }
    )
    
  }



}
