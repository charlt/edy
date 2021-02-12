import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import { GLOBAL } from "./services/global";
import { Timing } from "src/app/services/timing";
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


declare var gtag;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    statusWindow = true;
    onLocalStorageEvent;
    messageTitle: string;
    messageText: string;
    validateSession: number;
    modalAbierta = false;

    constructor(
        private router: Router,
        private _usuarioService: UsuarioService,
        private modalService: NgbModal
    ){
        // const navEndEvents$ = this.router.events
        // .pipe(
        //     filter(event => event instanceof NavigationEnd)
        // );
        // navEndEvents$.subscribe((event: NavigationEnd) => {
        //     gtag('config', 'UA-154661961-1', {
        //         'page_path': event.urlAfterRedirects
        //     });
        // });
    }
    intervalId: any;
    jwt: string;
    
    @ViewChild('modalSesion') modalSesion: NgbModalRef;

    ngOnInit() {

        this._usuarioService.tokenExpired.subscribe(
            (response) => {
            //   console.log(response);

              if(!this.modalAbierta){
                this.open(this.modalSesion)
                this.modalAbierta = true;
              }
                
            }
          );

        var _self = this;
        this.validateSession = GLOBAL.validarSesion;
        localStorage.removeItem('openpage');
        if (this.validateSession == 1) {            
            localStorage.setItem('openpage', Date.now().toString());
            this.interval();
            this.onLocalStorageEvent = function(event) {    
                if (event.key == "openpage") {
                    let url = event.url.split('#')[1];                    
                    if (url != '/materia/video-conferencia/' && url != '/materia/video-conferencia') {
                        _self.statusWindow = false;
                        _self.messageTitle = 'Hay otra pestaña abierta';
                    }                      
                }
            };
            window.addEventListener('storage', this.onLocalStorageEvent);
        }
    }

    interval(){
        this.intervalId = setInterval( () => { 
            if (localStorage.getItem('openSessionId') && this.statusWindow) {
                this.jwt = this._usuarioService.getJWT();            
                let ventana = localStorage.getItem('openSessionId'); 
                if (ventana) {
                    this._usuarioService.consultaMiSesion(this.jwt, ventana).subscribe( response =>{
                        if(response && response['status']){                                                           
                            if (response['acceso'] && response['acceso'].fecha_fin != null) {
                                this.messageTitle= 'Esta sesión ha expirado';
                                this.messageText = `Nueva conexión con la ip: ${response['acceso'].ip}, 
                                    en el navegador: ${response['acceso'].navegador}, con el dispositivo: ${response['acceso'].dispositivo}`;
                                this.statusWindow = false; 
                                clearInterval(this.intervalId);
                                localStorage.removeItem('identity');
                                localStorage.removeItem('jwt');
                                localStorage.removeItem('privilege');
                                localStorage.removeItem('selectedRol');
                            }                                   
                        }   
                    },error =>{
                        console.log(<any>error)
                    });
                }
            }  
        }, Timing.sesion);
    }

        

    open(content) {
        let ngbModalOptions: NgbModalOptions = {
            backdrop: 'static',
             keyboard: false 
        };

        this.modalService.open(content,ngbModalOptions).result.then((result) => {
        }, (reason) => {
        });
    }

    ngOnDestroy() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
    }
    
    reLogged(event){
        
        if(event.status){
        
            
            this.modalService.dismissAll();
            this.modalAbierta = false;
            }
        }


        onLoggedout() {
            this._usuarioService.guardaFechaUltSesion(this.jwt).subscribe(
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
        
    
    
}
