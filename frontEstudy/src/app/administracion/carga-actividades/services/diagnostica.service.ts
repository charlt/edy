import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticaService {
  url;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

  consultaRespuesta(idPregunta,jwt,momento,visualiza_flag,idMateriaFechaActividad){

    var params = '?id_pregunta='+idPregunta;
    params += '&id_materia_fecha_actividad='+idMateriaFechaActividad;    
    params += '&visualiza_flag='+visualiza_flag;    
    params += '&momento='+momento;    
    params += '&jwt='+jwt;    

    return this._httpClient.get(this.url +'learning/respuestaDiagnostica/consulta.php'+params);
  }

  guardaRespuesta(idPregunta,respuesta,idMateriaFechaActividad,visualiza_flag,jwt,idRespuesta = null){

    let formData: FormData = new FormData(); 
    
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('id_pregunta', idPregunta);
    formData.append('visualiza_flag', visualiza_flag);
    formData.append('respuesta', respuesta);
    formData.append('jwt', jwt);

    if(!idRespuesta){
      return this._httpClient.post(this.url +'learning/respuestaDiagnostica/crea.php',formData);
    }else{

      formData.append('id_respuesta', idRespuesta);

      return this._httpClient.post(this.url +'learning/respuestaDiagnostica/edita.php',formData);
    }
  }

}
