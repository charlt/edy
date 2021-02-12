import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideToTop } from '../router.animations';
import {Usuario} from '../models/usuario';
import {Rol} from '../models/rol';
import { GLOBAL }  from '../services/global';
import { universidad }  from '../services/universidad';

import * as myParticles from '../models/particles';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioService } from '../services/usuario.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { OtrosLoginService } from '../services/externos/otros-login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var alertify;
declare var particlesJS;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [slideToTop()]
})
export class LoginComponent implements OnInit {
    http;
    public jwt: string;
    public url: string;

    universidad;
    bienvenida;
    loginForm: FormGroup;
    loginRolForm: FormGroup;
    ipAddress;
    navegador;
    os;
    vLoginForm: boolean = true;
    vLoginRolForm: boolean = false;
    loadingLogin: boolean = false;

    submitted: boolean;
    invalidUser: boolean;
    invalidMsg: string;
    
    private usuario: Usuario = new Usuario();

    nombre: string;
    roles: Array<Rol> = new Array<Rol>();
    selectedRol: Rol = new Rol();

    imgUrl: string;
    public urlAssets: string;


    constructor(
      private formBuilder: FormBuilder,
      public router: Router,
      private _usuarioService: UsuarioService,
      private translate: TranslateService,
      private _otrosLoginService:OtrosLoginService,
      private modalService: NgbModal
    ) {  

      this.translate.setDefaultLang('es');
    }

    ngOnInit() {
      this.urlAssets = GLOBAL.urlAssets;
      this.universidad = universidad;

        this.loginForm = this.formBuilder.group({
            usuario: ['', Validators.required],
            password: ['', [Validators.required]]
        });
        this.loginRolForm = this.formBuilder.group({
          rolInstitucion: ['', Validators.required],
      });

  particlesJS("particles-js", myParticles.particles);

  this.getIpOs();
  this.navegador = this.browser();  
   
    }

    get f() { return this.loginForm.controls; }
    
    get f1() { return this.loginRolForm.controls; }

    getIpOs(){
      this._otrosLoginService.getIPAddress().subscribe((response:any)=>{
        this.ipAddress=response['ip'];
        if (navigator.appVersion.indexOf("Win")!=-1) this.os="Windows";
        if (navigator.appVersion.indexOf("Mac")!=-1) this.os="MacOS";
        if (navigator.appVersion.indexOf("X11")!=-1) this.os="UNIX";
        if (navigator.appVersion.indexOf("Linux")!=-1) this.os="Linux";
        if (navigator.appVersion.indexOf("Android")!=-1) this.os="Android";
      });
    }

    browser(){
      var ua= navigator.userAgent, tem, 
      M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
          tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE '+(tem[1] || '');
      }
      if(M[1]=== 'Chrome'){
          tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
          if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
      M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
      return M.join(' ');
    }


    logUser(){

      this.loadingLogin = true;

      this.submitted = true;
      this.invalidUser = false;


      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.usuario.usuario = this.loginForm.value.usuario;
      this.usuario.password = this.loginForm.value.password


      
      this._usuarioService.consultaUsuarioRol(this.usuario).subscribe(
          response =>{
            if(response && response['status']){
              this.roles = response['roles'];
              if(response['roles'].length > 1){
                this.nombre = response['roles'][0].nombre;
                
                this.vLoginForm = false;
                this.vLoginRolForm= true;

              }else{
                this.loginRolForm.value.rolInstitucion = 0;
                
                this.logRol();
              }

              if (response['roles'][0].url_perfil) {                
                this.imgUrl = this.urlAssets + response['roles'][0].url_perfil;
              }else{
                // this.imgUrl = 'assets/images/learning/usuarios.png';
                this.imgUrl = null;
              }
              
            }else{
              this.loadingLogin = false;
              this.invalidUser = true;
              this.invalidMsg= 'Usuario y/o contraseña incorrecta';
            }
              
          },error =>{
            console.log(<any>error)
          }
      );
           

    }

    logRol() {

        this.submitted = true;
        this.invalidUser = false;
        // stop here if form is invalid
        if (this.loginRolForm.invalid && !this.vLoginForm) {
            return;
        }
        this.usuario.usuario = this.loginForm.value.usuario;
        this.usuario.password = this.loginForm.value.password;

        this.selectedRol = this.roles[this.loginRolForm.value.rolInstitucion]
        
        this._usuarioService.generateJWT(this.usuario,this.selectedRol).subscribe(
            response =>{
                
              if(response && response['status']){
                
                  this.jwt = response['jwt'];
                  

                  localStorage.setItem('jwt',response['jwt']);
                  localStorage.setItem('identity',JSON.stringify(response['user']));
                  if (sessionStorage.getItem('tmp_jwt')) sessionStorage.removeItem('tmp_jwt');
                  if (sessionStorage.getItem('tmp_identity')) sessionStorage.removeItem('tmp_identity');

                  let idRol = response['user'].rol_id;
                        
                  this.bienvenida = response['msg'];
                        
                  let ventana = localStorage.getItem('openpage');      
                  if (this.os && this.navegador) {
                    this._usuarioService.guardarAcceso(this.jwt, this.ipAddress,this.os, this.navegador).subscribe(
                      response =>{
                          if(response && response['status']){   
                            localStorage.setItem('openSessionId', ventana);                                   
                            alertify.success(this.bienvenida)   
                          }      
                      },error =>{
                        console.log(<any>error)
                      });
                  }                              
                  if(idRol == 1){
                    this._usuarioService.consultaPrivilegios(this.jwt).subscribe(
                      
                      response =>{
                        let privilegios = null;
                        console.log("responsee",response)
                        if(response && response['status'])
                          privilegios = response['privilegios']
                          console.log(privilegios);
                        localStorage.setItem('privilege',JSON.stringify(privilegios));
                        this.router.navigate(['/admin/home']);
                      });
                  }
                  else if(idRol == 2)
                    this.router.navigate(['/learning/home']);
                  else if(idRol == 3)
                    this.router.navigate(['/docente/home']);
                  else if(idRol == 4)
                    this.router.navigate(['/inscripcion/home']); 
                  else if(idRol == 5)
                    this.router.navigate(['/asesor/home']);                           
                        //alertify.success(response['msg']);
              }else{
                this.loadingLogin = false;
                this.invalidUser = true;
                this.invalidMsg= response['jwt'];
              }
            },error =>{
              console.log(<any>error)
            }
          );
    }

  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xl'});
  }

  close() {
    this.modalService.dismissAll();
  }
    
}
