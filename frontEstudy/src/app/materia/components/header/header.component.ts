import { Component, OnInit, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';
import { TrMateria } from '../../../models/learning/trMateria';
import {universidad} from '../../../services/universidad';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ActividadService } from '../../actividad/services/actividad.service';
import { MateriaService } from 'src/app/services/materia.service';
import { GLOBAL } from '../../../services/global';
import { Timing } from "src/app/services/timing";
import { PlataformaService } from 'src/app/services/plataforma.service';
import { Location } from '@angular/common';
import { AvisosService } from 'src/app/components/avisos/avisos.service';


// import {Router} from '@angular/router'

declare var alertify: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit,OnDestroy {
    public pushRightClass: string;
    public identity: Usuario;

    private intervalD: any;
    jwt:string;
    porcentaje;
    idMateria;
    //avisos;
    archivo;
    universidad;
    _numAviso;
    nombre;
    rol;
    color;
    numMensajes;
    numRetros;
    mensajesRetros;
    mostrarRetros: boolean = false;
    url;
    urlImg;
    selectMFecha_fin;
    activo: number;

    
    idUsuarioDocente;
    msgDocenteLinea = 0;

    public selectedMateria: TrMateria = new TrMateria(); 
    public materias: Array<TrMateria>;

    showScroll: boolean;
    showScrollHeight = 300;
    hideScrollHeight = 10;
    docenteActivo;
    identModal: any;

    @ViewChild('content') modalAvisos: any;
    @ViewChild('contentModalM') modalMensajes: any;    

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
    

    constructor(
        private translate: TranslateService,
        private _usuarioService: UsuarioService,
        public router: Router,
        private _materiaService: MateriaService,
        //private _avisosService: AvisosService,
        private _actividadService: ActividadService,
        private _plataformaService: PlataformaService,
        private modalService: NgbModal,
        private location: Location
    ) {
        this.url = GLOBAL.urlAssets;
        this.universidad = universidad;


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
        this.jwt = this._usuarioService.getJWT();        
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();
        
        this.nombre = this.identity.nombre
        this.color = this.identity.color
        
        this.selectedMateria = this._materiaService.getSelectedMateria();

        
        if(this._materiaService.getSelectedMateria().docente){
            this.idUsuarioDocente = this._materiaService.getSelectedMateria().docente.usuario_id;
        }
        
        this.materias = this._materiaService.getMaterias();
        
        this.idMateria = this.selectedMateria.materia_id;

        let ngbModalOptions: NgbModalOptions = {
            backdrop : 'static',
            keyboard : false,
        };


        this.intervalD = setInterval( () => { 
            this.docente();
          }, Timing.materia);
        

        this.consultaAvance();
        this.consultaNumAvisos();
        //this.consultaAvisos();
        this.consultaMensajes();
        this.consultaRetros();
        

        this._actividadService.actividadCompletada.subscribe(
            (response) => {
              //this.actualizaInfoMateria();
              this.consultaAvance();
            }
          );


        var now = new Date();

        //cálcula el tiempo de sesión restante
        this.pushRightClass = 'push-right';

    }

    

    nuevoLink(actividad_id){
        localStorage.setItem('identModal','1');
        this.router.navigate(['materia/actividad/'+actividad_id]);
    }

    docente(){
        this._plataformaService.consultamsjDocente(this.jwt, this.idUsuarioDocente,this.idMateria).subscribe(response =>{
          if(response){            
            this.docenteActivo = parseInt(response['activo']);
            if(this.docenteActivo == 1 && this.msgDocenteLinea ==0){
                alertify.success('Docente en línea');
                this.msgDocenteLinea = 1;
            }
            this.numMensajes = response['numMensajes']
          }   
        },error =>{
            console.log(<any>error)
        });
      }

    consultaRetros(){
        this._materiaService.consultaRetros(this.jwt, this.idMateria).subscribe(
            response =>{
                if (response && response['status']){
                    this.numRetros = response['totalMensajes']
                    this.mensajesRetros = response['mensajes']
                    console.log(this.mensajesRetros);
                }else{
                    this.numRetros = null;
                }
            },error =>{
                console.log(<any>error)
            }); 


    }

    redireccionamiento(url){
        this.router.navigate(['./actividad/'+ url])
    }

    mostrarMsgRetros(){
        if(!this.mostrarRetros)
        this.mostrarRetros = true;
        else
        this.mostrarRetros = false;    
    }

    consultaMensajes(){        
        this._materiaService.consultaNumMensajes(this.jwt, this.idMateria).subscribe(
            response =>{
                if (response && response['status']){
                    this.numMensajes = response['totalMensajes']                    
                }else{
                    this.numMensajes = null;
                }
                this.identModal = localStorage.getItem('identModal');
                localStorage.removeItem('identModal');
                
            },error =>{
              console.log(<any>error)
          });
    }

    consultaNumAvisos(){        
        this._materiaService.consultaNumAvisos(this.jwt, this.idMateria).subscribe(
            response =>{
                if (response && response['status']){
                    let _numAviso = response['numAviso'][0]
                    this._numAviso = _numAviso.num_avisos
                }else{
                    this._numAviso=null;
                }
                console.log(this._numAviso);
                
            },error =>{
              console.log(<any>error)
          });
    }

    /*consultaAvisos(){
        let nuevos= 1;
        this.idMateria
        let importante = false
        this._materiaService.consultaAvisos(this.idMateria).subscribe(
            response =>{
                if (response && response['status']){
                    let _avisos = response['aviso'];
                    _avisos.forEach(_aviso => {
                        if (_aviso.importancia_aviso_id == "2") {
                            importante = true;
                        }

                        
                        _aviso.fecha_inicio = new Date(_aviso.fecha_inicio*1000);
                        _aviso.fecha_fin = new Date(_aviso.fecha_fin*1000);
                        
                    });
                    this.avisos = _avisos;
                    console.log(this.avisos);
                    
                    if(importante){
                        this.abreAvisos(this.modalAvisos);
                        // this._materiaService.marcarVisto().subscribe()
                    }                    
                }
            },error =>{
              console.log(<any>error)
          });
    }*/

    /*abreAvisos(content){
        
        this.openModalAvisos(content)
    }*/


    regresoPag(){
        
        if(this.rol.rol_id == "2"){
            this.router.navigate(['/learning/materia']);
        }else if (this.rol.rol_id == "3"){
            this.router.navigate(['/docente/home']);
        }else{
            this.location.back()
        }
        
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
                }
            },error =>{
                console.log(<any>error)
            });
        
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
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

    openModalAvisos(content) {
        let ngbModalOptions: NgbModalOptions = {windowClass: 'modal-xl'};

        this.modalService.open(content,ngbModalOptions).result.then((result) => {
        }, (reason) => {
        });
    }
    cambiaMateria(id){

        this._materiaService.seleccionaMateria(id,this.jwt).then(
            (materia:any)=>{
            this.consultaNumAvisos();
            //this.consultaAvisos();
            this.consultaMensajes();
            this.consultaRetros();
            
            this.selectedMateria = materia;
            this.consultaAvance()

            this._materiaService.cambioMateria();
              this.router.navigate(['/materia/']);
            }
          );
        
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    consultaAvance(){
        
        this._materiaService.consultaAvance(this.selectedMateria.materia_id,this.selectedMateria.asignatura_id, this.jwt).subscribe(
            response =>{
                if (response && response['status']) {
                    this.porcentaje = response['porcentaje']
                }
            },error =>{
              console.log(<any>error)
          });
    }

    
    
    ngOnDestroy() {
        clearInterval(this.intervalD);
    }

    /*marcarAviso(id) {
        this._avisosService.marcarAvisos(id,1,1).subscribe(response => {
            if (response && response['status']) {
                let index = this.avisos.findIndex(a => a.avisos_grupo_id == id);
                this.avisos.splice(index, 1);
                this._numAviso = parseInt(this._numAviso) - 1;
                alertify.success(response['msg']).dismissOthers();
            }
        }, error => {
            console.log(<any>error);
        });        
    }*/

}

