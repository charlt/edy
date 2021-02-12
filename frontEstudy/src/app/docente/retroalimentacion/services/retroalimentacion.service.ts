import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetroalimentacionService {

  public url: string;


  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consultaRetrosAlumno(tipo, id_materia,id_asignatura_grupo){
    var params = '?nuevos='+tipo;
    params += '&materia_id='+id_materia;
    return this._httpClient.get(this.url +'/controlEscolar/retroalimentacion/retroalimentacionesAlumno.php'+params);
   }


   consultaRetrosDocente(jwt, tipo, id_asignatura_grupo){
    var params = '?jwt='+jwt;
    params += '&nuevos='+tipo;
    params += '&id_asignatura_grupo='+id_asignatura_grupo;
  
    return this._httpClient.get(this.url +'/controlEscolar/retroalimentacion/retroalimentacionesDocente.php'+params);
   }

   cambiaVisto(rol, id_materia, id_actividad,visto, cambios){
    var params = '?rol_id='+rol;
    params += '&id_materia='+id_materia;
    params += '&visto='+visto; //1 visto 0 no visto
    params += '&id_actividad='+id_actividad; 
    params += '&numero_cambios='+cambios; 
  
    return this._httpClient.get(this.url +'/learning/retroalimentacion/marcaVistoRetro.php'+params);
   }

   notificaciones(id_materia,id_actividad, jwt ){
      var params = '?id_materia='+id_materia;
      params += '&id_actividad='+id_actividad;
      params += '&jwt='+jwt;
    
      return this._httpClient.get(this.url +'/learning/notificaciones/retroalimentacionActividad.php'+params);
   }

   consulta(id_materia,id_actividad){

    var params = '?id_materia='+id_materia;
     params += '&id_actividad='+id_actividad;
    
    return this._httpClient.get(this.url +'/learning/retroalimentacion/consulta.php'+params);
  }

  enviar(materia_fecha_actividad_id,persona_id,texto,origen,jwt,retroalimentacion_id=null, contForm, id_materia, id_actividad){

    let formData: FormData = new FormData(); 
    
    formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
    formData.append('persona_id', persona_id);
    formData.append('origen', origen);
    // formData.append('jwt', jwt);
    formData.append('id_materia', id_materia);
    formData.append('id_actividad', id_actividad);

    if(texto)formData.append('texto', texto);else formData.append('texto', '');
    if(contForm.get('contenido').value)formData.append('archivo', contForm.get('contenido').value);

    if(!retroalimentacion_id){
      return this._httpClient.post(this.url +'learning/retroalimentacion/crea.php',formData);
    }
  }

  correccionActividad(materia_fecha_actividad_id,persona_id,texto,origen,jwt){


    let formData: FormData = new FormData();
  
    formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
    formData.append('persona_id', persona_id);
    formData.append('texto', texto);
    formData.append('origen', origen);
  
  
    return this._httpClient.post(this.url + 'learning/fechaActividad/corregirActividad.php',formData);
  
  }

  invalidacionActividad(materia_fecha_actividad_id,persona_id,texto,origen,jwt){


    let formData: FormData = new FormData();
  
    formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
    formData.append('persona_id', persona_id);
    formData.append('texto', texto);
    formData.append('origen', origen);
  
  
    return this._httpClient.post(this.url + 'learning/fechaActividad/invalidaActividad.php',formData);
  
  }

  
  }
