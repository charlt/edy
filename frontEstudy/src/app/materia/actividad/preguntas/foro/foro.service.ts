import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  public url: string;
  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;

   }

   insertaRespuesta(form,id_pregunta,respuesta, respuesta_padre_id, id_respuesta, id_materia_fecha_actividad, rol){
    let formData: FormData = new FormData(); 
    if (rol == 3) {
      formData.append('flg_moderador', '1')
    }else{
      formData.append('flg_moderador' , '0');
    }
    formData.append('id_pregunta', id_pregunta);
    formData.append('respuesta', respuesta);
    formData.append('archivo', form.get('contenido').value);
    formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
    
    if(form.get('solicitaRevision').value){
      formData.append('solicita_revision', '1');
    }else{
      formData.append('solicita_revision', '0');
    }


    if(id_respuesta){
    formData.append('id_respuesta', id_respuesta)
    
    }else{
      formData.append('id_respuesta_padre', respuesta_padre_id)
    }   
    var fd = new FormData();
    if (id_respuesta){
      return this._httpClient.post(this.url +'learning/respuestaForo/edita.php',formData);
    }else{
      return this._httpClient.post(this.url +'learning/respuestaForo/crea.php',formData);
    }
    
      

    
  }

  consultaRespuesta(id_pregunta,id_materia_fecha_actividad){

    var params = '?id_pregunta='+id_pregunta;
    params += '&id_materia_fecha_actividad='+id_materia_fecha_actividad;

    
    
    return this._httpClient.get(this.url +'learning/respuestaForo/consulta.php'+params);
  }


}
