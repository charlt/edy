import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RubricasService {
  
  url:string;

  constructor(
    private _http: Http,
  private _httpClient: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  consulta(jwt, id_rubrica){
    var params = "?id_rubrica=" + id_rubrica;
    params += "&jwt=" + jwt;
    
    return this._httpClient.get(this.url + 'learning/rubrica/consulta.php' + params);
  }

  creaHorizontal(id_rubrica, form, jwt){
    let formData: FormData = new FormData();  

    formData.append('id_rubrica', id_rubrica);
    form.horizontales.forEach(horizontal => {
      formData.append('elemento_desc[]', horizontal.texto);
    });
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/rubrica/cargaElemento.php',formData);
  }

  creaVertical(id_rubrica, form, jwt){
    let formData: FormData = new FormData(); 
    
    formData.append('id_rubrica', id_rubrica);
    form.verticales.forEach(vertical => {
      formData.append('categoria_desc[]', vertical.texto);
    });
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/rubrica/cargaCategorias.php',formData);
  }

  creaRubrica(jwt, form){
    let formData: FormData = new FormData();    
    formData.append('id_actividad', '1');
    formData.append('descripcion_rubrica', form.titulo);
    formData.append('numero_elementos', form.selectHorizontal);
    formData.append('numero_categorias', form.selectVertical);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/rubrica/crea.php',formData);
  }
  
  consultaHorizontal(id_rubrica, jwt){
    var params = "?id_rubrica=" + id_rubrica;
    params += "&jwt=" + jwt;
    return this._httpClient.get(this.url + 'learning/rubrica/consultaElemento.php' + params);
  }

  consultaVertical(id_rubrica, jwt){
    var params = "?id_rubrica=" + id_rubrica;
    params += "&jwt=" + jwt;

    return this._httpClient.get(this.url + 'learning/rubrica/consultaCategoria.php' + params);

  }

  consultaRespuestas(id_rubrica, jwt){
    var params = "?id_rubrica=" + id_rubrica;
    params += "&jwt=" + jwt;

    return this._httpClient.get(this.url + 'learning/celdaRubricas/consulta.php' + params);
  }
  
  guardaCelda(jwt, id_horizontal, id_vertical, textarea, input){
    let formData: FormData = new FormData();    
    formData.append('id_elemento', id_horizontal);
    formData.append('id_categoria', id_vertical);
    formData.append('celda', textarea);
    formData.append('respuesta_valor', input);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/celdaRubricas/crea.php',formData);
  } 

  editaCelda(jwt, id_respuesta, textarea, input){
    let formData: FormData = new FormData();    
    formData.append('id_respuesta', id_respuesta);
    formData.append('celda', textarea);
    formData.append('respuesta_valor', input);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/celdaRubricas/edita.php',formData);
  } 

  catalogo(jwt){
    var params = "?jwt=" + jwt;
    return this._httpClient.get(this.url + 'catalogosLE/rubrica.php' + params);
  }

  eliminaRubrica(id_rubrica, jwt) {
    var params = "?jwt=" + jwt;
    params += '&id_rubrica=' + id_rubrica;
    return this._httpClient.get(this.url + 'learning/rubrica/elimina.php' + params);
  }

  guardaTotalCelda(jwt, datos, id_materia_fecha_actividad){
    let formData: FormData = new FormData();    
    formData.append('id_categoria', datos.categoria_id);
    formData.append('id_respuesta', datos.respuesta_id);
    formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
    formData.append('docente_valor', datos.valor);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/celdaRubricas/respuestaDocente.php',formData);
  }

  guardarRubrica(jwt, id_materia_fecha_actividad){
    var params = "?jwt=" + jwt;
    params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
    return this._httpClient.get(this.url + 'learning/fechaActividad/guardarCalificacionRubrica.php' + params);
  }

  consultaAlumno(id_rubrica, id_materia_fecha_actividad, jwt){
    var params = "?id_rubrica=" + id_rubrica;
    params += "&jwt=" + jwt;
    params += "&id_materia_fecha_actividad=" + id_materia_fecha_actividad;

    return this._httpClient.get(this.url + 'learning/celdaRubricas/consultaAlumno.php' + params);
  }

  creaRubricaJson(jwt, rubrica) {
    let formData: FormData = new FormData();
    formData.append('rubrica', JSON.stringify(rubrica));
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/rubrica/cargaRubricaJson.php', formData);
  }
}
