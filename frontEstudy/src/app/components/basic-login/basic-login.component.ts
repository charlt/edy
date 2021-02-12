import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { OtrosLoginService } from 'src/app/services/externos/otros-login.service';
import { JwtInterceptorService } from 'src/app/services/jwt-interceptor.service';


declare var alertify;

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {


  public jwt: string;
  public url: string;
  bienvenida;
  invalidUser: boolean;
  private usuario: Usuario = new Usuario();
  selectedRol;
  bscLoginForm: FormGroup;
  identity;
  ipAddress;
  navegador;
  os;
  

  @Output() login = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    public router: Router,
    private _otrosLoginService:OtrosLoginService,
    private _jwtInterceptorService: JwtInterceptorService
  ){


   }

   get f() { return this.bscLoginForm.controls; }


  ngOnInit(){
    // this._jwtInterceptorService.intercept(0,0);
  this.identity = this._usuarioService.getIdentity();
  // console.log(this.identity);
  

    this.bscLoginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password:['', Validators.required],
      rol:     ['']
    });

    this.getIpOs();
    // this.browsser();
    this.navegador = this.browser();  

  }

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

  loginUser(){ 
    this.usuario.usuario = this.bscLoginForm.value.usuario;
    this.usuario.password = this.bscLoginForm.value.password;

    // console.log(this.identity.usuario);
    // console.log(this.usuario.usuario);

    
    if(this.identity.usuario != this.usuario.usuario){
      alertify.error('Este usuario no corresponde a la sesión');      
    }else{
    this.selectedRol = this._usuarioService.getRol();
    this._usuarioService.generateJWT(this.usuario, this.selectedRol).subscribe(
      response =>{
        if(response && response['status']){
          localStorage.setItem('jwt',response['jwt']);
          this.jwt = response['jwt'];
          console.log(this.jwt);
          if (this.os && this.navegador) {
            this._usuarioService.guardarAcceso(this.jwt, this.ipAddress,this.os, this.navegador).subscribe(
              response =>{
                console.log(response);
                  if(response && response['status']){                       
                    // window.location.reload()
                    this.login.emit({'status': 1, 'bscLoginForm': this.bscLoginForm });
                    this.invalidUser = true
                    alertify.success('Sesión iniciada correctamente')   
                  }      
              },error =>{
                console.log(<any>error)
              });
          }
        }else{
          this.invalidUser = false
        }
      });
    }
    

     
    
    // this._usuarioService.consultaUsuarioRol(this.usuario).subscribe( // consulta todos los roles
    //   response =>{
    //     console.log(response['roles'])
    //     response['roles'].forEach(elemento =>{
    //       console.log(elemento)
    //        this.selectedRol = elemento;
    //        console.log(this.selectedRol)
    //     });
    //   },error =>{
    //     console.log(<any>error)
    //   }
    // );
    
    // if(this.selectedRol > 1){
      // //nuevo formulario
      // this._usuarioService.consultaUsuarioRol(this.usuario).subscribe(
      //   response =>{
      //     console.log(response['roles'])
      //     response['roles'].forEach(elemento =>{
      //       console.log(elemento)
      //        this.selectedRol = elemento;
      //        console.log(this.selectedRol)
      //     });
      //   },error =>{
      //     console.log(<any>error)
      //   }
      // );
    // }
      
  
  
  }

}