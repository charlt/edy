import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RelacionService {
  
  url;

  
  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
    } 
    
    consultaRelacion(id,jwt,idMateriaFechaActividad = 0){

      var params = '?id_pregunta='+id;
      if(idMateriaFechaActividad)
        params += '&id_materia_fecha_actividad='+idMateriaFechaActividad; 
      params += '&jwt='+jwt;    
      
      return this._httpClient.get(this.url +'learning/reactivoRelacion/consultaPregunta.php'+params);
      }

    consultaRelacionAleatoria(id, jwt,idMateriaFechaActividad){
        var params = '?id_pregunta=' + id;
        if (idMateriaFechaActividad) {
          params += '&id_materia_fecha_actividad='+idMateriaFechaActividad; 
        }
        params += '&jwt='+jwt;
        
        return this._httpClient.get(this.url +'/learning/reactivoRelacion/consultaAleatorio.php'+params);    
      }

  modificaRelacion(form,id,jwt){

    let formData: FormData = new FormData(); 

    console.log(form)
    let items=form.get('items');
    console.log(items.value);

    
    formData.append('id_pregunta', id);

    items.value.forEach(item => {
      console.log(item);
      formData.append('columna_a_respuesta[]', item.columna_a);
      formData.append('columna_b_respuesta[]', item.columna_b);
    });
    
    formData.append('ponderacion', '1');
    // formData.append('modulo_id', id_modulo);
    formData.append('jwt', jwt);
    

    var fd = new FormData();

      return this._httpClient.post(this.url +'learning/reactivoRelacion/crea.php',formData);
  }

  guardarRelacionColumnas(form,idMateriaFechaActividad, jwt){
    let formData: FormData = new FormData(); 

    formData.append('id_reactivo', form.id_rectivo);
    formData.append('id_a_columna', form.id_a_columna);
    formData.append('id_b_columna', form.id_b_columna);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'learning/respuestaRelacion/crea.php',formData);
  }
  
  eliminaRespuestas(id_pregunta,idMateriaFechaActividad, jwt){
    var params = '?id_pregunta=' + id_pregunta;
    params += '&id_materia_fecha_actividad='+idMateriaFechaActividad; 
    params += '&jwt=' + jwt;
    
    return this._httpClient.get(this.url +'learning/respuestaRelacion/elimina.php' + params);
  }
}
