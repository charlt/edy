import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import  { Rol } from 'src/app/models/rol';
// import { timer  } from 'rxjs';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GLOBAL } from '../../../services/global';
import { universidad } from '../../../services/universidad';
import { Timing } from "src/app/services/timing";
import { PlataformaService } from 'src/app/services/plataforma.service';
import { AvisosAdminService } from 'src/app/administracion/avisos-admin/avisos-admin.service';
import { AvisosService } from 'src/app/components/avisos/avisos.service';

declare var alertify;

@Component({
  selector: 'app-header-asesor',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public pushRightClass: string;
  public identity: Usuario;
  public tokenExpiration: Date;
  private interval;
  public reloj;
  selectedRol: Rol;
  institucion_id;
  
  jwt: string;
  estilos;
  url: string;
  universidad;
  usuario;
  cerrar: boolean;
  difference;
  tokenModal;
  id_usuario;
  nombre;
  colorLogo;
  mensajes: Array<any>;
  numMensajes: number = 0;
  idMateria: any;
  intervalDocente: any;
  conferencia;
  selectedConferencia;
  retroalimentaciones;
  nombresRetros;
  totalRetros;
  toggleAlumnos = false;
  flagConferencia: boolean = false;
  flagModal: boolean= true;
  cargandoConferencia:boolean = false;
  urlMeet;
  cerrandoConferencia: boolean = false;

  videoconferenciaActiva: any;
  tipoVideoConferencia: number;

  notificaciones: any;
  totalNotificaciones: any;
  notificacionesObligatorias: Array<any> = [];
  notificacionesEmergentes: Array<any> = [];

//   @ViewChild('modalConferencia') modalConferencia: NgbModalRef;
//   @ViewChild('contentObligatorio') modalObligatorio: NgbModalRef;
//   @ViewChild('contentEmergente') modalEmergente: NgbModalRef;

  constructor(
      private translate: TranslateService,
      private _usuarioService: UsuarioService,
      public router: Router,
      private modalService: NgbModal,
      private _plataformaService: PlataformaService,
      private _avisosAdminService: AvisosAdminService, 
      private _avisosService: AvisosService
      ) {


      this.router.events.subscribe(val => {
          if (
              val instanceof NavigationEnd &&
              window.innerWidth <= 992 &&
              this.isToggled()
          ) {
              this.toggleSidebar();
          }
      });

      this.url = GLOBAL.urlAssets;     
      this.universidad = universidad;

  }


  ngOnInit() {
      let ngbModalOptions: NgbModalOptions = {
          backdrop : 'static',
          keyboard : false
      }

      this.jwt = this._usuarioService.getJWT();
      let identity = this._usuarioService.getIdentity();
    //   this.id_usuario = identity.usuario_id;      
    

      //cálcula el tiempo de sesión restante
      this.pushRightClass = 'push-right';
      this.identity = this._usuarioService.getIdentity()
      this.nombre = this.identity.nombre;
      this.colorLogo = this.identity.color;
      this.selectedRol = this._usuarioService.getRol();

        this.numMensajes = 0;
        // this.consultaMensajes();
        // this.consultaRetros()
        // this.consultaNombreRetros();
        // this.getNotificaciones();
        // this.interval = setInterval(() => {                    
        //     this.getConferenciaActiva(0);
        // }, 60000)    
  }

  consultaNombreRetros(){
    this._plataformaService.consultaNomRetro(this.jwt).subscribe(
        response => {        
        if (response && response['status']){
            this.nombresRetros = response['retroalimentaciones'];
        }
    }, error => {
        console.log(<any>error);
    });
  }

  nuevoLink(actividad_id, materia_id){
      this.router.navigate(['docente/actividad/'+actividad_id+'/'+materia_id]);
      localStorage.setItem('identModal', '1');
      
  }

    getNotificaciones() {
        this._plataformaService.consultaNotificaciones(3).subscribe(response => { 
            if (response && response['status']) {
                this.notificaciones = response['notificacion'];
                this.totalNotificaciones = this.notificaciones.length; 
                               
                let notificacionObligatoria, notificacionEmergente;

                for (let item of this.notificaciones) {                                        
                    if(
                    (item['tipo'] == '3' && item['importancia_aviso_id'] == '2') ||
                     (item['tipo'] == '6' && item['importancia_aviso_id'] == '2') ||
                     (item['tipo'] == '5' && item['obligatorio'] == '1')
                    ) {
                        this.notificacionesObligatorias.push(item);
                        notificacionObligatoria = 1;
                    }else if (item['tipo'] == '6' && item['importancia_aviso_id'] == '3') {
                        this.notificacionesEmergentes.push(item);
                        notificacionEmergente = 1;
                    }
                }
                // if (notificacionObligatoria) this.abrirObligatorio();
                // if (notificacionEmergente) {
                //     this._avisosAdminService.consultaAviso(this.notificacionesEmergentes[0]['aviso_id']).subscribe(
                //         response => {                                                        
                //             if (response && response['status']) {
                //                 this.notificacionesEmergentes = response['aviso'][0];  
                //                 this.modalService.open(this.modalEmergente, {size: 'lg'});
                //             }
                //         }, error => {
                //             console.log(<any>error)
                //     });
                // }
            }else{
                this.notificaciones = undefined;
                this.totalNotificaciones = undefined;
            }
        }, error => {
            console.log(<any>error)
        });    
    }

    abrirNotificacion(notificacion) {             
        if (notificacion['tipo'] == 1) 
            this.router.navigateByUrl('/docente/tickets/' + notificacion['ticket_id']);
        else if (notificacion['tipo'] == 6)
            this.router.navigateByUrl('/docente/avisos');
    }

    // abrirObligatorio() {
    //     this.modalService.open(this.modalObligatorio);
    // }

    marcarAviso(aviso) {
        if(aviso.visto == 1){
          aviso.visto = 0;
        }
        else if(aviso.visto == 0){
          aviso.visto = 1;
        }
        this._avisosService.marcarAvisos(aviso.aviso_id,aviso.tipo,aviso.visto).subscribe(response => {
          if (response && response['status']){   
                alertify.success(response['msg']).dismissOthers();
            }
        }, error => {
            console.log(<any>error);
        });        
    }


    consultaRetros(){
        this._plataformaService.consultaRetrosDocente(this.jwt, this.id_usuario).subscribe(
            response => {        
            if (response && response['status']){
                this.totalRetros = response['totalRetroalimentaciones'];
                this.retroalimentaciones = response['retroalimentaciones'];
            }
        }, error => {
            console.log(<any>error);
        });
    }

    consultaMensajes(id = 0){
        this._plataformaService.consultamsjAlumnos(this.jwt).subscribe(
            response => {                                  
            if (response && response['status']) {
                this.numMensajes = response['numero_mensajes'];
            }
            if (id == 0) {            
                this.intervalDocente = setInterval(() => {
                    this.consultaMensajes(1);
                }, Timing.docente);  
            }
        }, error => {
            console.log(<any>error);
        });
    }

    conferenciaActiva(){
        // let ngbModalOptions: NgbModalOptions = {
        //     backdrop : 'static',
        //     keyboard : false,
        //     windowClass: 'modal-xl'
        // };

        // if (!this.flagConferencia) {
        //     this.flagConferencia = true;
        //     this.modalService.open(this.modalConferencia,ngbModalOptions).result.then((result) => {
        //         }, (reason) => {
        //     });
        // }
        this.flagConferencia = true;
    }


    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
    this._usuarioService.guardaFechaUltSesion(this.identity.usuario_id).subscribe(
        response =>{
            if(response && response['status']){
                console.log('funciona')
            }
        },error =>{
            console.log(<any>error)
        });

        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('selectedAsignaturaGrupo');
        sessionStorage.removeItem('idAsignaturaGrupo');

        
    }

    open(content) {
        let ngbModalOptions: NgbModalOptions = {
            backdrop : 'static',
            keyboard : false,
            windowClass: 'modal-xl'
        };

        this.modalService.open(content,ngbModalOptions).result.then((result) => {
        }, (reason) => {
        });
    }

//   seleccionaConferencia(conferencia){
//     this.selectedConferencia = conferencia
    
//   }
  
    consultaMsjAlumnos(){
        this.mensajes =null;
        this.toggleAlumnos = true;
        this._plataformaService.consultamsjAlumnosDetalles(this.jwt).subscribe(
            response =>{
                if(response && response['status']){
                    this.mensajes = response['mensajes'];
                }else{
                    this.mensajes =null;
                }
            },error =>{
                console.log(error)
            }
        );
    }

    openMensajeria(content, id_materia) {
        this.idMateria = id_materia;
        this.modalService.open(content, {windowClass: 'modal-xl'});
    }

    changeLang(language: string) {
        this.translate.use(language);
    }


    public get value() : string {
        return 
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

}
