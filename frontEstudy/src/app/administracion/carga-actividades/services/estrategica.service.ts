import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstrategicaService {
  url;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consultaRespuesta(idPregunta,jwt,idMateriaFechaActividad){

    var params = '?id_pregunta='+idPregunta;
    params += '&id_materia_fecha_actividad='+idMateriaFechaActividad;    
    params += '&jwt='+jwt;    

    return this._httpClient.get(this.url +'learning/respuestaEstrategica/consulta.php'+params);
  }

   guardaRespuesta(idPregunta,respuesta1,respuesta2,respuesta3,jwt,idMateriaFechaActividad,idRespuesta = null){

    let formData: FormData = new FormData(); 
    
    formData.append('id_pregunta', idPregunta);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('respuesta1', respuesta1);
    formData.append('respuesta2', respuesta2);
    formData.append('respuesta3', respuesta3);
    formData.append('jwt', jwt);

    if(!idRespuesta){
      return this._httpClient.post(this.url +'learning/respuestaEstrategica/crea.php',formData);
    }else{

      formData.append('id_respuesta', idRespuesta);

      return this._httpClient.post(this.url +'learning/respuestaEstrategica/edita.php',formData);
    }
  }
}
