import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import  { Rol } from 'src/app/models/rol';
import { GLOBAL } from '../../../services/global';
import {universidad} from '../../../services/universidad';
import { PlataformaService } from 'src/app/services/plataforma.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public identity: Usuario;
    public reloj;
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

    notificaciones: any;
    totalNotificaciones: any;

    constructor(
        private translate: TranslateService,
        private _usuarioService: UsuarioService,
        public router: Router,
        private _plataformaService: PlataformaService  
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
        this.jwt = this._usuarioService.getJWT();
        //cálcula el tiempo de sesión restante
        this.pushRightClass = 'push-right';
        this.identity = this._usuarioService.getIdentity()
        this.nombre = this.identity.nombre;
        this.colorLogo = this.identity.color;
        this.selectedRol = this._usuarioService.getRol();
        this.getNotificaciones();
    }

    getNotificaciones() {
        this._plataformaService.consultaNotificaciones(4).subscribe(response => { 
            console.log(response);
            
            if (response && response['status']) {
                this.notificaciones = response['notificacion'];
                this.totalNotificaciones = this.notificaciones.length;                
            }else{
                this.notificaciones = undefined;
                this.totalNotificaciones = undefined;
            }
        }, error => {
            console.log(<any>error)
        });    
    }

    abrirNotificacion(notificacion) {   
        this.router.navigateByUrl('/inscripcion/tickets/' + notificacion['ticket_id']); 
        // switch (notificacion['tipo']) {
        //     case '1':
        //         this.redireccion(notificacion, '/learning/tickets/' + notificacion['ticket_id']);
        //         break;
        //     case '2':
        //         this.redireccion(notificacion, '/materia/mensajes/'+notificacion['materia_id']);
        //         break;
        //     case '3':
        //         this.redireccion(notificacion, '/materia/avisos/2');
        //         break;
        //     case '4':
        //         this.redireccion(notificacion, '/materia/actividad/' + notificacion['actividad_id']);
        //         break;
        //     case '5':
        //         this.redireccion(notificacion, '/learning/encuesta/' + notificacion['encuesta_id']+'/'+notificacion['switch_encuesta_id']);
        //         break;
        //     case '6':
        //         this.router.navigate(['/learning/avisos/1']);
        //         break;
        //     default:
        //         break;
        // }
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
   }
   
    changeLang(language: string) {
        this.translate.use(language);
    }
        
}

