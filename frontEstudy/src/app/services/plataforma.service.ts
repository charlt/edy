import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  public url: string;
  listenTicket = new EventEmitter<any>();
  listenEncuesta = new EventEmitter<any>();

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  cambiaAvisoEncuestaEstatus(encuesta_id){
    this.change.emit(encuesta_id);
  }

  consultaNomRetro(jwt){
    var params = '?jwt='+jwt;
    return this._httpClient.get(this.url +'controlEscolar/notificaciones/retroalimentacionesAlumnoNombre.php'+params); 
  }

  consultaRetrosDocente(jwt, id_docente){
    var params = '?jwt='+jwt;
    params += '&id_docente='+id_docente;
    

    return this._httpClient.get(this.url +'controlEscolar/notificaciones/retroalimentacionesDocente.php'+params); 
  }

  consultamsjDocente(jwt, id_docente,id_materia){
    var params = '?jwt='+jwt;
    params += '&id_docente='+id_docente;
    params += '&id_materia='+id_materia;
    

    return this._httpClient.get(this.url +'learning/notificaciones/onlineDocente.php'+params);
  }

  consultamsjAlumnos(jwt){
    var params = '?jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/controlEscolar/notificaciones/numMensajesAlumno.php'+params);
  }

  consultamsjAlumnosDetalles(jwt){
    var params = '?jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/controlEscolar/notificaciones/mensajeriaAlumnoNombre.php'+params);
  }

  consultaConferenciasActivas(){
  
    return this._httpClient.get(this.url +'/learning/notificaciones/consultaConferenciasAlumno.php');
  }

  conferenciasActivasDocente(jwt) {
    var params = '?jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/controlEscolar/notificaciones/consultaConferenciasActivas.php'+params);
  }

  verNotificacionBloqueo(id,id_rol){
    var params = '?id_persona=' + id;
    params += '&id_rol=' + id_rol;
    
    
    return this._httpClient.get(this.url +'/general/tickets/consultaBloqueo.php'+params);
  }

  consultaTicket(){
    return this._httpClient.get(this.url +'general/tickets/notificacionTicket.php');
}



  consultaNotificaciones(idRol) {

    if(idRol == "2" || idRol == "4"){
      return this._httpClient.get(this.url + 'learning/notificaciones/general.php');
    }else if(idRol == "3"){
      return this._httpClient.get(this.url + 'controlEscolar/notificaciones/general.php');
    }
      
  }

  consultaJWT(matricula, rol) {
    let formData = new FormData();
      formData.append('rol', rol);
      formData.append('clave', matricula);
    return this._httpClient.post(this.url +'general/auth_clave.php', formData);
  }

}
