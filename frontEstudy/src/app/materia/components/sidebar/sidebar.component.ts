import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from '../../../services/usuario.service';
import { MateriaService } from '../../../services/materia.service';
import { CatAsignaturas } from 'src/app/models/datosGenerales/catAsignatura';
import { ActividadService } from '../../actividad/services/actividad.service';

declare var alertify: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    identity;
    rol;
    jwt;
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    asignatura: CatAsignaturas;
    privilegios;
    modulos;
    idAsignatura;
    disabled: boolean = false;
    actividadesCargadas = null;
    contenidosCargados = null;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(
        private translate: TranslateService,
        private _usuarioService: UsuarioService,
        private _materiaService: MateriaService,
        private _actividadService: ActividadService,
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

        this._materiaService.actividadesCargadas.subscribe(response => {   
            setTimeout(() => {
                if (response['componente'] == 'main') {                    
                    if (response['cargado'] != undefined && response['cargado'] == false) this.disabled = true;
                    else if (response['cargado'] == undefined && response['actividad']) {
                       if (response['actividad']['tipo_actividad_id'] == 1) this.disabled = false;
                    }else if (response['cargado'] == true && response['actividad'] == undefined) {
                        this.disabled = false;
                    }
                }else if (response['componente'] == 'home-materia' || response['componente'] == 'actividad'
                    || response['componente'] == 'portafolio') {
                    if (response['cargado']) this.disabled = false;
                }                 
            }, 1);
        })

        this.asignatura = this._materiaService.getSelectedMateria();
        
        this.modulos = this._materiaService.getModulos();        

        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();
        this.privilegios = this._usuarioService.getPrivilege();        

        // this.modulos.forEach(modulo => {
        //     modulo.actividades.forEach(actividad => {
        //         console.log(actividad);
        //         if (actividad.estatus_actividad_id == 1) {
        //             this.router.navigate(['../actividad/' + actividad.actividad_id]);
        //             break;
        //         }
        //     });
        // });

        let array = this.router.url.split('/');
        let location = array[2];
        
        if (location === 'home') {
            let bandera = false;
            for (const modulo of this.modulos) {
                for (const actividad of modulo.actividades) {
                    if (actividad.estatus_actividad_id == 1) {
                        bandera = true;
                        console.log(this.router.url);
                        
                        this.router.navigate(['/materia/actividad/' + actividad.actividad_id]);
                        break;
                    }
                }
                if (bandera) break;
            }
        }
        
        
        this._materiaService.materiaActualizada.subscribe(
            (response) => {
                this.modulos = this._materiaService.getModulos();
                console.log(this.modulos);
            }
        );
        this._actividadService.actividadCompletada.subscribe(
            (response) =>{
                let selectedMateria = this._materiaService.getSelectedMateria();
                this._materiaService.consultaMenu(this.jwt, selectedMateria.asignatura_grupo_id,selectedMateria.materia_id).subscribe(
                    response =>{
                        if(response && response['status']){
                        localStorage.setItem('modulos',JSON.stringify(response['modulo']));
                        this.modulos = response['modulo'];                        
                        }
                    },error =>{
                      console.log(<any>error)
                  });
            }
        );

        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right'; 

        this.idAsignatura = this.asignatura.asignatura_id;


        this._actividadService.actividadCompletada.subscribe(
            (response) => {
              //this.actualizaInfoMateria();
              this.modulos = this._materiaService.getModulos();

            }
          );
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(i) {
        if(!this.modulos[i].desplegarAct){
            this.modulos[i].desplegarAct = 1;
        }else{
            this.modulos[i].desplegarAct = 0;
        }
    }

    toggleCollapsed() {
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
        
    }
}
