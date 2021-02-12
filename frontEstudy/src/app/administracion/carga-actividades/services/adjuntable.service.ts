import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdjuntableService {
  url;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  guardaContenido(form, idCatFormato, idPregunta, idMateriaFechaActividad, jwt) {

    let formData: FormData = new FormData();
    formData.append('id_pregunta', idPregunta);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('archivo', form.get('contenido').value);
    formData.append('id_cat_formato', idCatFormato);

    return this._httpClient.post(this.url + 'learning/respuestaAdjuntable/crea.php', formData);
  }

  guardaUrl(idMateriaFechaActividad, idPregunta, url) {

    let formData: FormData = new FormData();
    formData.append('pregunta_id', idPregunta);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('url_archivo', url);

    return this._httpClient.post(this.url + 'learning/respuestaAdjuntable/creaUrlExterna.php', formData);
  }

  eliminaUrl(id) {
    var params = '?id_respuesta=' + id;
    // params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
    return this._httpClient.get(this.url + 'learning/respuestaAdjuntable/eliminaUrlExterna.php'+ params);
  }

  consultaContenido(id, idMateriaFechaActividad, jwt) {
    var params = '?id_pregunta=' + id;
    params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
    return this._httpClient.get(this.url + 'learning/respuestaAdjuntable/consulta.php' + params);
  }

  eliminaContenido(id, idMateriaFechaActividad, jwt) {
    var params = '?id_respuesta=' + id;
    params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
    return this._httpClient.get(this.url + 'learning/respuestaAdjuntable/elimina.php' + params);
  }

}
