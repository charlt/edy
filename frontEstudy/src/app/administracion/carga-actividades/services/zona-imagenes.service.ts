import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ZonaImagenesService {
  
  url;

  
  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
    }
    
  consultaZonaImagenes(id_pregunta, jwt,idMateriaFechaActividad){
      var params = '?id_pregunta=' + id_pregunta;
      if (idMateriaFechaActividad != 0) {
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad
      }
      params += '&jwt='+jwt;
      
      return this._httpClient.get(this.url +'/learning/reactivoZonaImagenes/consultaPregunta.php'+params);    
    }
    
  modificaZona(form,ancho,alto,idPregunta,jwt){

    let formData: FormData = new FormData(); 
    let items = form.get('items');
    formData.append('imagen_ancho', ancho);
    formData.append('imagen_alto', alto);
    if (form.get('imagen').value) {
      formData.append('imagen', form.get('imagen').value);
    }
    items.value.forEach(item => {
      formData.append('reactivo_desc[]',item.input)
      formData.append('ancho[]', item.ancho);
      formData.append('alto[]', item.alto);
      formData.append('posicion_x[]', item.posX);
      formData.append('posicion_y[]', item.posY);
      formData.append('color[]', item.color);

    });
    
    formData.append('id_pregunta', idPregunta);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'learning/reactivoZonaImagenes/crea.php',formData);
  }

  guardaRespuestas(form, idMateriaFechaActividad, jwt){
    let formData: FormData = new FormData(); 
    formData.append('id_reactivo', form.id_reactivo);
    formData.append('posicion_x', form.posicion_x);
    formData.append('posicion_y', form.posicion_y);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'learning/respuestaZonaImagen/crea.php',formData);
  }

  eliminaRespuestas(id_pregunta, idMateriaFechaActividad,  jwt){
    var params = '?id_pregunta=' + id_pregunta;
    params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad
    params += '&jwt=' + jwt;

    return this._httpClient.get(this.url +'learning/respuestaZonaImagen/elimina.php' + params);
  }
}
