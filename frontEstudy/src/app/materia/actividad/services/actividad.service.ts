import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  
  public url: string;

  actividadCompletada = new EventEmitter<any>();
  actividadCalificada = new EventEmitter<any>();

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consulta(id,jwt){

    var params = '?id_actividad='+id;
     params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/actividad/consulta.php'+params);
  }
  consultaRetro(jwt,id_actividad,id_materia){
    var params = '?id_actividad='+id_actividad;
    params += '&id_materia='+id_materia;
    params += '&jwt='+jwt;
   
    
    return this._httpClient.get(this.url +'/controlEscolar/notificaciones/mensajeriaActividad.php'+params);
  }
  
  consultaFechaActividadActivo(id_actividad,id_materia, jwt){

    var params = '?id_actividad='+id_actividad;
    params += '&id_materia='+id_materia;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/consultaActivo.php'+params);
  }

  consultaActividadPadre(id_actividad,id_materia, jwt){

    var params = '?id_actividad='+id_actividad;
    params += '&id_materia='+id_materia;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/consultaPadre.php'+params);
  }
   
  consultaFechaActividadDummy(id_actividad, jwt){

    var params = '?id_actividad='+id_actividad;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/consultaDummy.php'+params);
  }

  
  consultaPreguntas(id, jwt, tipo = 0){
    console.log(tipo);
    

    var params = '?id_actividad='+id;
     params += '&jwt='+jwt;
     params += '&tipo='+tipo;
    
    return this._httpClient.get(this.url +'/learning/actividad/consultaPreguntas.php'+params);
  }

    
  consultaRespuestas(id_materia_fecha_actividad, jwt){

    var params = '?id_materia_fecha_actividad='+id_materia_fecha_actividad;
     params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/consultaRespuestas.php'+params);
  }

  consultaPreguntasRespuestas(id_actividad, id_mfa, intentos, jwt, tipo = 1){
    var params = '?id_actividad='+id_actividad;
     params += '&jwt='+jwt;
     params += '&id_materia_fecha_actividad='+id_mfa;
     params += '&intentos_restantes='+intentos;    
     params += '&tipo='+tipo; 
    
    return this._httpClient.get(this.url +'/learning/actividad/consultaPreguntas.php'+params);
  }

  consultaContenidos(id,jwt){

    var params = '?id_actividad='+id;
     params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/contenidoActividad/consulta.php'+params);
  }

  registraFechaActividad(id,idMateria,idTipoActividad,jwt){

    var params = '?id_actividad='+id;
        params += '&id_materia='+idMateria;
        params += '&id_tipo_actividad='+idTipoActividad;
        params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/registra.php'+params);
  }

  actualizaFechaActividad(id,estatus_actividad,jwt){
    

      let formData: FormData = new FormData();

      formData.append('id_materia_fecha_actividad', id);
      formData.append('jwt', jwt);
      formData.append('calificacion', '10');
      formData.append('intento_num', '1');
      formData.append('id_estatus_actividad', estatus_actividad);
    
    
      return this._httpClient.post(this.url + 'learning/fechaActividad/edita.php',formData);
  }

  finalizaFechaActividad(id,tipo_calificacion,forzar_cierre){
    

    let formData: FormData = new FormData();

    formData.append('id_materia_fecha_actividad', id);
    formData.append('tipo_calificacion', tipo_calificacion);    
    formData.append('forzar_cierre', forzar_cierre);  
  
  
    return this._httpClient.post(this.url + 'learning/fechaActividad/finalizarActividad.php',formData);
}

reintentaActividad(id,idMateria,intento_num,idTipoActividad,jwt){


  let formData: FormData = new FormData();

  formData.append('id_actividad', id);
  formData.append('id_materia', idMateria);
  formData.append('intento_num', intento_num);
  formData.append('id_tipo_actividad', idTipoActividad);
  formData.append('jwt', jwt);


  return this._httpClient.post(this.url + 'learning/fechaActividad/reintenta.php',formData);

}

correccionActividad(id,idMateria){


  let formData: FormData = new FormData();

  formData.append('id_actividad', id);
  formData.append('id_materia', idMateria);


  return this._httpClient.post(this.url + 'learning/fechaActividad/corregirActividadPrimeraVez.php',formData);

}



calificaRespuesta(idMateriaFechaActividad,idDatosPregunta,valorRespuesta,tipoCalificacion,numeroRespuestas,jwt){


  let formData: FormData = new FormData();

  formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
  formData.append('id_datos_pregunta', idDatosPregunta);
  formData.append('tipo_calificacion', tipoCalificacion);
  formData.append('valor_respuesta', valorRespuesta);
  formData.append('numero_respuestas', numeroRespuestas);
  formData.append('jwt', jwt);


  return this._httpClient.post(this.url + 'learning/fechaActividad/calificarRespuesta.php',formData);

}

  siguienteActividad(idActividad){
    
    
  
    let seriacionActividad = JSON.parse(localStorage.getItem('seriacionActividad'))
    let nextActividad = 0;

    seriacionActividad.forEach(function(actividad,index){
      if(actividad == idActividad){
        nextActividad = seriacionActividad[index+1];
        
      }
      
    });
    
    return nextActividad;
  }

  consultaFaltantes(id_materia_fecha, jwt){    
    var params = '?id_materia_fecha_actividad='+id_materia_fecha;
      params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/preguntaFaltantes.php'+params);
  }

  guardarCalificacion(id_materia_fecha, jwt){
    let formData: FormData = new FormData();    
      formData.append('id_materia_fecha_actividad', id_materia_fecha);
      formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'/learning/fechaActividad/guardarCalificacionDocente.php',formData);
  }

  aprobarPortafolio(id_materia_fecha, jwt){
    let formData: FormData = new FormData();

    formData.append('materia_fecha_actividad_id', id_materia_fecha);
    formData.append('jwt', jwt);
  
    return this._httpClient.post(this.url + 'learning/fechaActividad/validarPortafolio.php', formData);
  }
  guardarCalificacionPortafolio(id_materia_fecha,calificacion, jwt){
    let formData: FormData = new FormData();

    formData.append('materia_fecha_actividad_id', id_materia_fecha);
    formData.append('calificacion', calificacion);
    formData.append('jwt', jwt);
  
    return this._httpClient.post(this.url + 'learning/fechaActividad/guardarCalificacionPortafolio.php', formData);
  }
  
  reevaluarCalificacion(id_materia_fecha, jwt){
    let formData: FormData = new FormData();

    formData.append('materia_fecha_actividad_id', id_materia_fecha);
    formData.append('jwt', jwt);
  
    return this._httpClient.post(this.url + 'learning/fechaActividad/reevaluarCalificacion.php', formData);
  }

  consultaPendientes(jwt, id_actividad, id_materia) {
    var params = '?materia_id='+id_materia;
    params += '&jwt='+jwt;
    params += '&actividad_id='+id_actividad;
    
    return this._httpClient.get(this.url +'/learning/fechaActividad/actividadesPendientes.php'+params);
  }

  guardaCalificacionDocente(id_materia) {
    let formData = new FormData();
      formData.append('id_materia_fecha_actividad', id_materia);
    return this._httpClient.post(this.url + 'learning/fechaActividad/guardarCalificacionDocente.php', formData);
  }

  creaSeguimientoActividad(id_materia_fecha_actividad) {
    let formData = new FormData();
      formData.append('materia_fecha_actividad_id', id_materia_fecha_actividad)
    return this._httpClient.post(this.url + 'learning/seguimientoActividad/crea.php', formData);
  }

  consultaSemaforo(id_materia_fecha_actividad) {
    let params = new HttpParams()
      .set('id_materia_fecha_actividad', id_materia_fecha_actividad);
    return this._httpClient.get(this.url + 'learning/seguimientoActividad/consultaSemaforo.php', {params: params});
  }
  

}
