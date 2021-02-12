import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from '../../../services/usuario.service';
import { GLOBAL } from 'src/app/services/global'
import { universidad } from 'src/app/services/universidad'
import { Rol } from 'src/app/models/rol';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
    selector: 'app-sidebar-learning',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    identity;
    rol : Rol;
    jwt;
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    

    urlImg: string ;
    universidad = universidad;
    url: string = GLOBAL.urlAssets;

    alumno;
    matricula;
    Keys: any;
    btnReturn: boolean = false;

    privilegios: any;
    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(
        private translate: TranslateService,
        private _usuarioService: UsuarioService,
        private _alumnoService: AlumnoService,
        public router: Router
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
    }

    ngOnInit() {
        if (sessionStorage.getItem('tmp_jwt')) this.btnReturn = true;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();
        this.isActive = false;
        this.collapsed = true;
        this.showMenu = '';
        this.pushRightClass = '';           

        this.toggleCollapsed();

        if(this.identity.alumno){
            this.alumno = this.identity.alumno;
            this.matricula =this.identity.alumno.clave_alumno;
        }else{
            this.alumno = null;
            this.matricula = null;
        }
        
        this._alumnoService.infoPlataformaCargada.subscribe(
            (response) => {
                this.privilegios = response['privilegios']
                this.Keys = Object.keys(this.privilegios);
            }
          );

        

    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {           
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        // console.log(this.collapsed);
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
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

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');        
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
        
    }

    vistaAdministrador() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('identity');

        localStorage.setItem('jwt', sessionStorage.getItem('tmp_jwt'));
        localStorage.setItem('identity', sessionStorage.getItem('tmp_identity'));

        sessionStorage.removeItem('tmp_jwt');
        sessionStorage.removeItem('tmp_identity');

        if (sessionStorage.getItem('urlRedirect')) {            
            this.router.navigate([sessionStorage.getItem('urlRedirect')]);
            sessionStorage.removeItem('urlRedirect');
        }else {
            this.router.navigate(['/admin/alumno/consulta']);
        }
    }
}

