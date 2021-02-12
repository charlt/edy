import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  url: string = GLOBAL.url;

  constructor(
    private _httpClient: HttpClient
  ) { }
  
  consultaListaEncuestas(id_rol, id_asignatura_grupo){        
    let params = new HttpParams()
      .set('id_rol', id_rol)
      .set('id_asignatura_grupo', id_asignatura_grupo);
      
    return this._httpClient.get(this.url + 'seguimiento/administracionEncuesta/listaEncuestas.php', {params:params});
  }

  consultaSwitchEncuesta(id_encuesta, id_switch_encuesta){
    let params = new HttpParams()
    .set('encuesta_id', id_encuesta)
    .set('id_switch_encuesta', id_switch_encuesta)
    return this._httpClient.get(this.url + 'seguimiento/encuesta/consultaSwitchEncuesta.php', {params: params});
  }

  guardaEncuesta(id_persona, form) {
    let formData = new FormData();
    formData.append('id_persona', id_persona);
    for (var [key, value] of form) {
      formData.append(key, value);
    }
    return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/crea.php', formData);

  }

  guardaPreguntas(form, id_encuesta) {
    let formData = new FormData();
    formData.append('preguntas', JSON.stringify(form));
    formData.append('id_encuesta', id_encuesta);

    return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaCampo.php', formData);

  }

  consultaPreguntas(id_encuesta) {
    let params = new HttpParams()
      .set('encuesta_id', id_encuesta);
    
    return this._httpClient.get(this.url + 'seguimiento/administracionEncuesta/consultaReactivos.php', {params: params});

  }

  guardaReactivos(form, id_encuesta) {
    let formData = new FormData();
    formData.append('preguntas', JSON.stringify(form));
    formData.append('encuesta_id', id_encuesta);
    console.log(form);

    return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaReactivos.php', formData);

  }

  consultaGrupo(id_plan_orden) {    
    let params = new HttpParams()
    .set('id_plan_orden', id_plan_orden);
  
    return this._httpClient.get(this.url + 'controlEscolar/ordenJerarquico/consultaGrupos.php', {params: params});
  }

  consultaAsignatura(id_grupo){
    let params = new HttpParams()
      .set('id_grupo', id_grupo);
    
    return this._httpClient.get(this.url +'/controlEscolar/grupo/consultaAsignaturas.php', {params: params});
  } 

  guardaInformacion(variable,id,id_encuesta,id_rol,inicio,fin, tipoForm, idAviso) {
    let formData = new FormData();
    formData.append('encuesta_id', id_encuesta);
    formData.append('id_rol', id_rol);
    if (variable && id) {
      formData.append(variable, id);
    }

    if (tipoForm != 1) {
      formData.append('fecha_inicio', inicio);
      formData.append('fecha_fin', fin);
      return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaSwitch.php', formData);
    } else if (tipoForm == 1){
      formData.append('id_aviso', idAviso);
      return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/creaSwitch.php', formData);
    }

  }

  consultaEncuestaAlumno() {
    return this._httpClient.get(this.url +'/seguimiento/encuesta/alumno/consultaEncuesta.php');
  }

  eliminaEncuesta(id_encuesta) {
    let formData = new FormData();
      formData.append('id_encuesta', id_encuesta);
    
    return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/elimina.php', formData);
  }

  consultaEstadísticas(id_encuesta) {
    let params = new HttpParams()
    .set('id_encuesta', id_encuesta);
  
  return this._httpClient.get(this.url +'/seguimiento/administracionEncuesta/consultaEstadistica.php', {params: params});
  }

}
