import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbiertaService {
  url;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

  consultaRespuesta(idPregunta,id_materia_fecha_actividad,jwt){

    var params = '?id_pregunta='+idPregunta;
    params += '&id_materia_fecha_actividad='+id_materia_fecha_actividad;    
    params += '&jwt='+jwt;    

    return this._httpClient.get(this.url +'learning/respuestaAbierta/consulta.php'+params);
  }

  guardaRespuesta(idPregunta,respuesta,id_materia_fecha_actividad,jwt,idRespuesta){
    
    let formData: FormData = new FormData(); 
    
    formData.append('pregunta_id', idPregunta);
    formData.append('respuesta', respuesta);
    formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
    formData.append('jwt', jwt);

    if(!idRespuesta){
      return this._httpClient.post(this.url +'learning/respuestaAbierta/crea.php',formData);
    }else{

      formData.append('id_respuesta', idRespuesta);

      return this._httpClient.post(this.url +'learning/respuestaAbierta/edita.php',formData);
    }
  }

}
