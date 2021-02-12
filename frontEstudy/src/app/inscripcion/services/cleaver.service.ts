import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CleaverService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;    
  }

  consulta(jwt){
    var params = '?jwt=' + jwt

    return this._httpClient.get(this.url +'seguimiento/formularioCleaver/consulta.php'+params);
  }

  preguntasContestadas(jwt, id_aspirante){
    var params = '?jwt=' + jwt;
    params += '&id_aspirante=' + id_aspirante;

    return this._httpClient.get(this.url +'seguimiento/formularioCleaver/preguntasContestadas.php'+params);
  }

  guardaRespuesta(jwt, datos){
    let formData: FormData = new FormData();    
    datos.forEach(dato => {
      formData.append('respuesta_id[]', dato.respuesta);
      formData.append('cleaver_base[]', dato.cleaver_base_id);
    });
    formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'seguimiento/formularioCleaver/inserta.php',formData);
  }

  finalizarFormulario(jwt){
    let formData: FormData = new FormData();
    formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'seguimiento/formularioCleaver/finalizarFormulario.php',formData);
  }

  borraFormulario(jwt){
    let formData: FormData = new FormData();
    formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'seguimiento/formularioCleaver/reintento.php',formData);
  }

}
