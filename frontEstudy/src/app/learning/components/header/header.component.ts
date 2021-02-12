import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { Rol } from 'src/app/models/rol';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { GLOBAL } from '../../../services/global';
import { universidad } from '../../../services/universidad';
import { PlataformaService } from 'src/app/services/plataforma.service';
import { MateriaService } from 'src/app/services/materia.service';
import { AvisosService } from 'src/app/components/avisos/avisos.service';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';
import { AvisosAdminService } from 'src/app/administracion/avisos-admin/avisos-admin.service';

declare var alertify: any;

@Component({
    selector: 'app-header-learning',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public identity: Usuario;


    selectedRol: Rol;
    institucion_id;
    jwt: string;
    estilos;
    url: string;
    universidad;
    usuario;
    cerrar: boolean;
    nombre;
    colorLogo;
    aviso_id;
    id_persona;
    encuesta_id;
    nuevasNotificaciones;
    totalNotificaciones;
    notificaciones: any;
    notificacionesObligatorias = [];
    notificacionesEmergentes = [];
    Obligatorio: any;

    data: any = undefined;
    ruta: string;

    notificacionBloqueo;


    @ViewChild('contentObligatorio') modalObligatorio: NgbModalRef;
    @ViewChild('contentEmergente') modalEmergente: NgbModalRef;

    constructor(
        private translate: TranslateService,
        private _usuarioService: UsuarioService,
        public router: Router,
        private modalService: NgbModal,
        private _plataformaService: PlataformaService,
        private _materiaService: MateriaService,
        private _avisosService: AvisosService,
        public _alumnoService: AlumnoService,
        private _avisosAdminService: AvisosAdminService
    ) {

        this._alumnoService.activaConsulta.subscribe(value => {
            this.notificaciones=null
            this.getNotificaciones();
        });

        this.url = GLOBAL.urlAssets;
        this.universidad = universidad;

        this._plataformaService.change.subscribe(encuesta_id => {
            this.encuesta_id= encuesta_id;
            if(this.encuesta_id)
            this.cambiaAvisosEncuesta();
        });

        this._avisosService.change.subscribe(aviso_id => {
            this.aviso_id= aviso_id;
            if(this.aviso_id)
            this.cambiaAvisos();
        });
    }

    ngOnInit() {
        this.ruta = this.router.url;        
        this.jwt = this._usuarioService.getJWT();

        //cálcula el tiempo de sesión restante
        this.pushRightClass = 'push-right';
        this.identity = this._usuarioService.getIdentity()
        this.nombre = this.identity.nombre;
        this.colorLogo = this.identity.color;
        this.selectedRol = this._usuarioService.getRol();
        this.id_persona = this.identity.persona_id;
        // this.consultaTickets();
        this.getNotificaciones();
    }

    cambiaAvisosEncuesta(){
        this.encuesta_id = this.encuesta_id.toString();
        for (let i = 0; i < this.notificaciones.length; i++){
            if (this.notificaciones[i].encuesta_id == this.encuesta_id){
                this.totalNotificaciones = this.totalNotificaciones - 1;
                this.notificaciones.splice(i, 1)
            } 
        }
    }

    cambiaAvisos(){
        this.encuesta_id = this.aviso_id.toString();
        for (let i = 0; i < this.notificaciones.length; i++){
            if(this.notificaciones[i].aviso_id == this.aviso_id){
                this.notificaciones.splice(i, 1)
                this.totalNotificaciones = this.totalNotificaciones - 1;
            }
        }
    }

    getNotificaciones() {
        this._plataformaService.consultaNotificaciones(2).subscribe(response => { 
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
                if (notificacionObligatoria) this.abrirObligatorio();
                if (notificacionEmergente) {
                    this._avisosAdminService.consultaAviso(this.notificacionesEmergentes[0]['aviso_id']).subscribe(
                        response => {                                                        
                            if (response && response['status']) {
                                this.notificacionesEmergentes = response['aviso'][0];  
                                this.modalService.open(this.modalEmergente, {size: 'lg'});
                            }
                        }, error => {
                            console.log(<any>error)
                    });
                }
            }else{
                this.notificaciones = undefined;
                this.totalNotificaciones = undefined;
            }
        }, error => {
            console.log(<any>error)
        });    
    }


    abrirObligatorio() {
        this.modalService.open(this.modalObligatorio);
    }

    abrirNotificacion(notificacion) {        
        switch (notificacion['tipo']) {
            case '1':
                this.redireccion(notificacion, '/learning/tickets/' + notificacion['ticket_id']);
                break;
            case '2':
                this.redireccion(notificacion, '/materia/mensajes/'+notificacion['materia_id']);
                break;
            case '3':
                this.redireccion(notificacion, '/materia/avisos/2');
                break;
            case '4':
                this.redireccion(notificacion, '/materia/actividad/' + notificacion['actividad_id']);
                break;
            case '5':
                this.redireccion(notificacion, '/learning/encuesta/' + notificacion['encuesta_id']+'/'+notificacion['switch_encuesta_id']);
                break;
            case '6':
                this.router.navigate(['/learning/avisos/1']);
                break;
            default:
                break;
        }
    }


    redireccion(notificacion, url) {
        this._materiaService.seleccionaMateria(notificacion['materia_id'], this.jwt).then(
            (data: any) => {                
                this.router.navigate([url]);
            }
        );
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
            response => {
                if (response && response['status']) {
                    
                }
            }, error => {
                console.log(<any>error)
            });

        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');

    }


    open(content) {
        let ngbModalOptions: NgbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'modal-xl'
        };

        this.modalService.open(content, ngbModalOptions).result.then((result) => {
        }, (reason) => {
        });
    }

    changeLang(language: string) {
        this.translate.use(language);
    }


    public get value(): string {
        return
    }

    abrirEncuesta() {
        let Encuestas = this.notificaciones.filter(n => n.tipo == 5);
        
        if (Encuestas) {
            for (let encuesta of Encuestas) {
                if (encuesta['obligatorio'] == '0') {
                    if(this.ruta == '/learning/materia') {
                        this.data = { id: 'encuesta_id', value: encuesta, type: 5 };
                        this.router.navigate(['/learning/home']);
                    }                
                    else if(this.ruta == '/learning/home') this._plataformaService.listenEncuesta.emit({ encuesta_id: encuesta });
                }
            }
        }        
    }

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


}

