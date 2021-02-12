import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  public url: string;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url
   }

  consultaFormulario(id_encuesta,id_switch_encuesta, id_persona){
    let params = new HttpParams()
      .set('id_encuesta', id_encuesta)
      .set('id_switch_encuesta', id_switch_encuesta)
      .set('id_persona', id_persona);

    return this._httpClient.get(this.url +'seguimiento/encuesta/consulta.php', { params: params });
  }

  enviaEncuesta(form, id_encuesta,id_switch_encuesta, editar){
    
    let formData: FormData = new FormData(); 
    formData.append('encuesta_id', id_encuesta);
    formData.append('switch_encuesta_id', id_switch_encuesta);

    form.forEach(pregunta => {
    if (pregunta.tipo == "checkbox") {
      pregunta.respuesta.seleccionados.forEach(respuesta => {
        formData.append('campo_encuesta_id[]', respuesta.campo_encuesta_id);
        formData.append('respuesta[]', respuesta.texto);
      });
    } else {
      formData.append('campo_encuesta_id[]', pregunta.campo_encuesta_id);
      formData.append('respuesta[]', pregunta.respuesta);
    }
    });    
    if (!editar) {
      return this._httpClient.post(this.url +'seguimiento/encuesta/guardarRespuesta.php', formData);
    }

    return this._httpClient.post(this.url +'seguimiento/encuesta/editaRespuesta.php', formData);

  }

  getContestado(id_persona,id_encuesta,id_switch_encuesta) {
    let params = new HttpParams()
      .set('id_persona', id_persona)
      .set('id_encuesta', id_encuesta)
      .set('id_switch_encuesta', id_switch_encuesta);
      

    return this._httpClient.get(this.url + 'seguimiento/encuesta/consultaRespuesta.php', { params: params })
  }

}
