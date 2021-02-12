import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

declare var alertify

@Injectable({
  providedIn: 'root'
})
export class ConsultaAsignaturaService {
public url: string;
public jwt: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url
   }

   consultaActividades(idAsignatura,jwt){
    var params = '?id_asignatura='+idAsignatura;
     params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'learning/asignatura/consultaActividades.php'+params);
  }

  modificaActividad(actividad, jwt){
 
    let formData: FormData = new FormData(); 
    formData.append('id_actividad', actividad.actividad_id);
    
    if (actividad.actividad_padre_id == "") {
      actividad.actividad_padre_id = null
    }
    formData.append('id_actividad_padre', actividad.actividad_padre_id);
    if(!actividad.fecha_inicio){
      alertify.error('Ingresa una fecha de inicio')
    }else{
      formData.append('fecha_inicio', actividad.fecha_inicio);
    }
    if (!actividad.fecha_fin) {
      alertify.error('Ingresa una fecha de fin')
    } else {
      formData.append('fecha_fin', actividad.fecha_fin);
    }
    if (!actividad.ponderacion) {
     alertify.error('Ingresa una ponderación')
    } else {
      formData.append('ponderacion', actividad.ponderacion);
    }
    formData.append('jwt', jwt);

    var fd = new FormData();

      return this._httpClient.post(this.url +'learning/actividad/editaControl.php',formData);

  }
}
