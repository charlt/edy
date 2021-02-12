import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';
import { Http, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class VideoConferenciaService {

  url: string = GLOBAL.url;

  mostrarUsuarioConferencia = new EventEmitter<any>();
  salaCerrada = new EventEmitter<any>();

  constructor(
    private _httpClient: HttpClient,
    private _http: Http
  ) { }

  elimina(jwt, id_videoconferencia) {
    var params = '?jwt='+jwt;
    params += '&id_videoconferencia='+id_videoconferencia;    
   return this._httpClient.get(this.url +'learning/videoconferencia/elimina.php'+params);
  }

  consulta(jwt, id_persona) {
    let params = new HttpParams()
      // .set('jwt', jwt)
      .set('id_persona', id_persona);
    return this._httpClient.get(this.url + 'learning/videoconferencia/consultausuario.php', { params: params });
  }

  
  creaMeet(id_videoconferencia) {
    let formData: FormData = new FormData();
    formData.append('id_videoconferencia', id_videoconferencia);
    
    return this._httpClient.post(this.url + 'extras/zoom/createMeet.php', formData);
  }

  cierraMeet(id_videoconferencia) {
    let formData: FormData = new FormData();
    formData.append('id_videoconferencia', id_videoconferencia);
    
    return this._httpClient.post(this.url + 'learning/videoconferencia/terminarVideoconferencia.php', formData);
  }

  consultaMeet(id_videoconferencia) {
    let params = new HttpParams()
    // .set('jwt', jwt)
    .set('id_videoconferencia', id_videoconferencia);
    
    return this._httpClient.get(this.url + 'extras/zoom/getMeet.php', { params: params });
  }


  consultaVideoconferencias(jwt, id_asignatura_grupo) {
    let params = new HttpParams()
      .set('jwt', jwt)
      .set('asignatura_grupo_id', id_asignatura_grupo);
    return this._httpClient.get(this.url + 'catalogosLE/videoConferencia.php', { params: params });
  }


  creaUsuario(jwt, form) {
    let formData: FormData = new FormData();
    formData.append('jwt', jwt);
    formData.append('apikey', form.apiKey);
    formData.append('apisecret', form.apiSecret);
    formData.append('idmeeting', form.idMeeting);
    return this._httpClient.post(this.url + 'learning/videoconferencia/creaUsuario.php', formData);
  }

  creaConferencia(jwt, form, edicion, id_asignatura_grupo, id_videoconferencia, fecha, tipo_fecha) {    
    let formData: FormData = new FormData();
    formData.append('jwt', jwt);
    formData.append('nombre', form.titulo);
    formData.append('descripcion', form.descripcion);
    formData.append('url_meet', form.url? form.url: '');    
    formData.append('zona_horaria', form.zonaHoraria);
    formData.append('asignatura_grupo_id', id_asignatura_grupo);
    formData.append('tipo_fecha', tipo_fecha);
    
    if (tipo_fecha == 0) {
      formData.append('fecha_inicio', fecha.inicio);
      formData.append('fecha_fin', fecha.fin);
    }else if (tipo_fecha == 1) {      
      formData.append('arreglo_fechas', JSON.stringify(fecha));
    }

    if (edicion == 0) {
      return this._httpClient.post(this.url + 'learning/videoconferencia/creaConferencia.php', formData);
    } else {
      formData.append('id_videoconferencia', id_videoconferencia);
      return this._httpClient.post(this.url + 'learning/videoconferencia/editaConferencia.php', formData);
    }
  }

  consultaConferencia(jwt, id_videoconferencia) {
    let params = new HttpParams()
      .set('jwt', jwt)
      .set('id_videoconferencia', id_videoconferencia);
    return this._httpClient.get(this.url + 'learning/videoconferencia/consultaConferencia.php', { params: params });
  }

  semaforoConferencia(jwt) {
    let params = new HttpParams()
    .set('jwt', jwt);

    return this._httpClient.get(this.url + 'learning/videoconferencia/semaforosUsuarios.php', { params: params });
  }

  insertaAcceso(jwt, id_videoconferencia, id_persona) {
    let formData: FormData = new FormData();
    formData.append('jwt', jwt);
    formData.append('id_video_conferencia', id_videoconferencia);
    formData.append('id_persona', id_persona);
    return this._httpClient.post(this.url + 'learning/videoconferencia/insertaAcceso.php', formData);
  }

  consultaAsistencia(jwt, id_videoconferencia) {
    let params = new HttpParams()
      .set('jwt', jwt)
      .set('id_videoconferencia', id_videoconferencia);
    return this._httpClient.get(this.url + 'learning/videoconferencia/consultaAsistencia.php', { params: params });
  }

  consultaConferenciasMateria(jwt, id_materia) {
    let params = new HttpParams()
      .set('jwt', jwt)
      .set('id_materia', id_materia);
    return this._httpClient.get(this.url + 'learning/notificaciones/consultaConferenciasMateria.php', { params: params });
  }

  consultaV(tipo, max, min){
    // var params = '?tipo_consulta='+tipo;
    let params = new HttpParams()
    .set('tipo_consulta', tipo)
    .set('max', max)
    .set('min', min);

    return this._httpClient.get(this.url +'/controlEscolar/videconferencia/consultas.php', { params: params });
  }

  busquedaVid(max, min, busqueda){
    // var params = '?tipo_consulta='+tipo;
    let params = new HttpParams()
    .set('busqueda', busqueda)
    .set('max', max)
    .set('min', min);

    return this._httpClient.get(this.url +'/controlEscolar/videconferencia/busquedaVideoconferencia.php', { params: params });
  }
  
  consultaAsist(id_videoconferencia){
    var params = '?id_videoconferencia='+id_videoconferencia;
    
    return this._httpClient.get(this.url +'/learning/videoconferencia/consultaAsistencia.php'+params);
  }

}
