import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  public url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  )
  {
    this.url = GLOBAL.url
  }

  consultaFormulario(jwt, id_formulario, id_aspirante){
    var params = '?jwt='+jwt;
    params += '&id='+id_formulario;
    params += '&id_aspirante='+id_aspirante;
    
    return this._httpClient.get(this.url +'seguimiento/formulario/consulta.php'+params);
  }

  enviaFormulario(jwt, form, id_formulario, editar, id_aspirante){    
    
    let formData: FormData = new FormData(); 
    formData.append('jwt', jwt); 
    formData.append('formulario_id', id_formulario);
    formData.append('aspirante_id', id_aspirante);
    
    form.forEach(pregunta => {
    if (pregunta.tipo == "checkbox") {
      pregunta.respuesta.seleccionados.forEach(respuesta => {
        formData.append('campo_formulario_id[]', respuesta.campo_formulario_id);
        formData.append('respuesta[]', respuesta.texto);
      });
    } else {
      formData.append('campo_formulario_id[]', pregunta.campo_formulario_id);
      formData.append('respuesta[]', pregunta.respuesta);
    }
    });    
    if (!editar) {
      return this._httpClient.post(this.url +'seguimiento/aspirante/guardarFormulario.php', formData);
    }

    return this._httpClient.post(this.url +'seguimiento/aspirante/editaFormulario.php', formData);

  }

}
