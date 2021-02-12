import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GLOBAL }  from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  public url: string;
  selectedGrupo;
  


  constructor(
    private _http: Http,
private _httpClient: HttpClient){
    this.url = GLOBAL.url;
  }

  
  modificaProfesor(form, jwt, id){

    let formData: FormData = new FormData();
    formData.append('cedula_profesional', ''); 
    formData.append('clave_profesor', form.get('clave').value); 
    formData.append('id_persona', id);
    formData.append('jwt', jwt);
    var fd = new FormData();
    
    return this._httpClient.post(this.url +'controlEscolar/docente/creaSimple.php',formData);
  }

  consultaDocente(id_persona, jwt){
    var params = '?id_docente='+id_persona;
    return this._httpClient.get(this.url +'/controlEscolar/docente/consulta.php'+params);
  }

  consultaTotalDocentes(jwt){
    var params = '?jwt='+jwt;
  
    return this._httpClient.get(this.url +'/controlEscolar/docente/totalDocentes.php'+params);
  }
    
  consultaBusqueda(jwt, busqueda, min, max, tipoForm){
    var params = '?jwt='+jwt;
    params += '&min='+ min;
    params += '&max='+ max;
    params += '&tipo_busqueda='+ tipoForm;

    if(busqueda)params += '&busqueda='+busqueda;

    return this._httpClient.get(this.url +'/controlEscolar/docente/busqueda_docente.php'+params);
  }

  consultaChat(jwt){
    var params = '?jwt='+jwt;

    return this._httpClient.get(this.url +'/controlEscolar/administracion-docente/consultaEstatusChat.php'+params);
  }

  cambiaChat(jwt, estatus) {
    let formData: FormData = new FormData();
    formData.append('jwt', jwt);
    formData.append('estatus', estatus);
    
    return this._httpClient.post(this.url +'controlEscolar/administracion-docente/cambiaChat.php',formData);
  }

  guardaTipoC(estatus, id_persona){
    let formData: FormData = new FormData();
    formData.append('estatus', estatus);
    formData.append('id_docente', id_persona);
    return this._httpClient.post(this.url +'controlEscolar/administracion-docente/cambiaCargaContenido.php',formData);
  }

  consultaActividades(clave, id_asignatura) {
    let params = new HttpParams()
      .set('clave_usuario', clave)
      .set('id_asignatura', id_asignatura);
    return this._httpClient.get(this.url +'controlEscolar/docente/consultaActividades.php', {params:params});
  }

  clonarActividad(id_actividad, id_modulo) {
    let formData: FormData = new FormData();
      formData.append('id_actividad', id_actividad);
      formData.append('id_modulo', id_modulo);
    return this._httpClient.post(this.url +'learning/actividad/clonarActividad.php', formData);
  }
  
}
