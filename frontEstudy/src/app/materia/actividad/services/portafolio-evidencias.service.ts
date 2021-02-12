import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortafolioEvidenciasService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  consultaRespuestas(id_actividad, id_fecha, jwt){
    var params = '?id_actividad=' + id_actividad;
    params += '&id_materia_fecha_actividad=' + id_fecha;
    params += '&jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/learning/portafolioEvidencias/consulta.php'+params);
  }


  consultaActividades(idMateriaFechaActividad, jwt){
    var params = '?id_materia_fecha_actividad=' + idMateriaFechaActividad;
     params += '&jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/consultaActividadesPortafolio.php'+params);
  }

  crearPortafolio(id_actividad, id_materia, jwt){

    let formData: FormData = new FormData();
    formData.append('id_actividad', id_actividad);
    formData.append('id_materia_fecha_actividad', id_materia);    
    formData.append('descripcion', "");
    formData.append('jwt', jwt);
  
    return this._httpClient.post(this.url + 'learning/portafolioEvidencias/crea.php',formData);
  }

  guardarPortafolio(id_materia_fecha_actividad, actividades, id_portafolio, respuestas, jwt){

    let formData: FormData = new FormData();
    formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
    actividades.forEach(actividad => {
      formData.append('id_actividad[]', actividad);
    });
    respuestas.forEach(respuesta => {
      formData.append('respuesta[]', respuesta);
    });
    formData.append('id_portafolio', id_portafolio);
    formData.append('jwt', jwt);
  
    return this._httpClient.post(this.url + 'learning/portafolioEvidencias/agregaActividades.php',formData);
  }

  guardarInformacion(id_portafolio, form, jwt){

    let formData: FormData = new FormData();
    formData.append('id_portafolio', id_portafolio);
    formData.append('descripcion', form.get('respuesta').value);
    formData.append('archivo', form.get('archivo').value);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/portafolioEvidencias/edita.php',formData);
  }

  validaRespuesta(id_actividad, id_portafolio, validado, jwt){
    var params = '?id_portafolio=' + id_portafolio;
    params += '&id_actividad=' + id_actividad;
    params += '&validado=' + validado;
    params += '&jwt=' + jwt;
   
   return this._httpClient.get(this.url +'/learning/portafolioEvidencias/validarRespuesta.php'+params);
  }

  finalizarPortafolio(id_materia_fecha, jwt){

    let formData: FormData = new FormData();
    formData.append('materia_fecha_actividad_id', id_materia_fecha);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/fechaActividad/finalizarPortafolio.php',formData);
  }

}
