import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from './global';
import { map } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';
import { Subject } from 'rxjs';



@Injectable()
export class UsuarioService{
  public url: string;
  public identity;
  public alumno;
  public rol;
  public materias;
  public expirationDate;
  public jwt;
  public breadcum;
  public privilege;
  // tokenExpired = new EventEmitter<any>();
  // tokenExpired: Subject<boolean> = new Subject<boolean>();
  public tokenExpired: EventEmitter<any> = new EventEmitter();

  constructor(
    private _http: Http,
private _httpClient: HttpClient){
    this.url = GLOBAL.url;
  }



  guardaCurriculum(jwt,curriculum){
      let formData: FormData = new FormData(); 
      let ventana = localStorage.getItem('openpage');      
      formData.append('jwt',jwt);
      formData.append('documento', curriculum.get('curriculum').value);

      return this._httpClient.post(this.url +'controlEscolar/docente/guardarCurriculum.php',formData);
    
  }

  guardaFechaUltSesion(id_usuario){
    let formData: FormData = new FormData(); 
    formData.append('id_usuario', id_usuario);

      return this._httpClient.post(this.url +'general/plataforma/logout.php',formData);
    
  
}

  checkJWT(jwt){
    var params = '?jwt='+jwt;
      return this._httpClient.get(this.url +'general/checkToken.php'+params);
    }
  generateJWT(usuario,rol){
      /*if(token != null){
        console.log(token);
        user.gettoken = token;
      }*/
      
      let formData: FormData = new FormData(); 

      const md5 = new Md5();
       //let pass =md5.appendStr( usuario.password).end() + '';
      formData.append('u',usuario.usuario); 
      formData.append('p', usuario.password);
      formData.append('id_r', rol.rol_id);
      formData.append('id_i', rol.institucion_id);

      return this._httpClient.post(this.url +'general/auth.php',formData);
    }

    guardarAcceso(jwt,ip,dispositivo,navegador){      
      let formData: FormData = new FormData(); 
      let ventana = localStorage.getItem('openpage');      
      formData.append('ip_publica', ip);
      formData.append('ventana', ventana);
      formData.append('dispositivo', dispositivo);
      formData.append('navegador', navegador);
      formData.append('jwt2',jwt);

      return this._httpClient.post(this.url +'general/plataforma/insertaAcceso.php',formData);
    }

    generateJWTid(id_usuario,id_rol){
      
      
      let formData: FormData = new FormData(); 

      formData.append('id_u',id_usuario); 
      formData.append('id_r', id_rol);

      return this._httpClient.post(this.url +'general/auth_id.php',formData);
    }

    consultaUsuarioRol(usuario){
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        let formData: FormData = new FormData(); 

        const md5 = new Md5();
        //let pass =md5.appendStr( usuario.password).end() + '';
        formData.append('u',usuario.usuario); 
        formData.append('p', usuario.password);
        //formData.append('p', pass);

        return this._httpClient.post(this.url +'general/usuario/consultaRol.php',formData);
      }

      miconsulta(jwt){
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt='+jwt;

        return this._httpClient.get(this.url +'general/usuario/miconsulta.php'+params);

  
      }



  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'))
    if(identity !== undefined){
      this.identity = identity;
    }else{
      this.identity = null;
    }

    return this.identity;
  }

  getAlumno(){
    let identity = this.getIdentity();
    let alumno = identity.alumno;
    if(alumno !== undefined){
      this.alumno = alumno;
    }else{
      this.alumno = null;
    }

    return this.alumno;
  }

  getRol(){
    let identity = JSON.parse(localStorage.getItem('identity'))
    let rol;
    if(identity !== undefined && identity != null){
      this.rol = {"rol_id": identity.rol_id,"rol":identity.rol, "institucion_id":identity.institucion_id, "institucion": identity.institucion};
    }else{
      this.rol = null;
    }

    return this.rol;
  }

  getExpirationDate(){
    let expirationDate = JSON.parse(localStorage.getItem('expirationDate'))
    if(expirationDate !== undefined){
      this.expirationDate = expirationDate;
    }else{
      this.expirationDate = null;
    }

    return this.expirationDate;
  }
  getJWT(){

    let jwt = localStorage.getItem('jwt');
    if(jwt !== 'null' && jwt !== undefined){
      this.jwt = jwt;
    }else{
      this.jwt = null;
    }

    return this.jwt;
  }

  getPrivilege(){
    let privilege = JSON.parse(localStorage.getItem('privilege'))
    if(privilege !== 'null' && privilege !== undefined){
      this.privilege = privilege;
    }else{
      this.privilege = null;
    }

    return this.privilege;
  }

  pushBreadcum(element,url,level){

    let breadcum = localStorage.getItem('breadcum');
    let jsonBreadcum;

    if(breadcum !==  null && breadcum != 'null' && breadcum !== undefined){
      jsonBreadcum = JSON.parse(localStorage.getItem('breadcum'))
    }else{
      jsonBreadcum = [];
    }

    
    jsonBreadcum[level-1] = {'name' :element , 'route': url};
    jsonBreadcum.splice(level,2);
    localStorage.setItem('breadcum',JSON.stringify(jsonBreadcum));
  }

  removeBreadcum(level){

    let breadcum = localStorage.getItem('breadcum');
    let jsonBreadcum;

    if(breadcum !==  null && breadcum != 'null' && breadcum !== undefined){
      jsonBreadcum = JSON.parse(localStorage.getItem('breadcum'))
    }else{
      jsonBreadcum = [];
    }

    
    jsonBreadcum.splice(level-1);
    localStorage.setItem('breadcum',JSON.stringify(jsonBreadcum));

  }

  getBreadcum(){
    let breadcum = JSON.parse(localStorage.getItem('breadcum'))
    if(breadcum !== undefined){
      this.breadcum = breadcum;
    }else{
      this.breadcum = null;
    }
    return this.breadcum;
  }

  consultaPrivilegios(jwt){
    var params = '?jwt='+jwt;
      return this._httpClient.get(this.url +'general/plataforma/privilegiosUsuario.php'+params);
  }

  consultaMiSesion(jwt, ventana){
    var params = '?jwt='+jwt;
    params += '&ventana='+ventana;

      return this._httpClient.get(this.url +'general/plataforma/consultamiSesion.php'+params);
  }



    // SIGNUP ALUMNO
    consultaUsuarioPrimeraVez(usuario){
      var params = '?busqueda='+usuario;
        
        return this._httpClient.get(this.url +'general/usuario/consulta_usuario.php'+params);
    }
  
    
    recuperaUsuario(form){
      let formData: FormData = new FormData();
      for (let [name, value] of form) {
        formData.append(name, value);       
      }   
      formData.append('cedula_profesional', '0');       
  
      return this._httpClient.post(this.url +'general/usuario/recuperaUsuario.php',formData);
    }
  

}
