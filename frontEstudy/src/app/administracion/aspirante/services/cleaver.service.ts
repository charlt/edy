import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
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

  consultaCalificacion(jwt, id_aspirante){
    let formData: FormData = new FormData(); 
    formData.append('id_aspirante', id_aspirante);
    formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'seguimiento/formularioCleaver/obtenerCalificacion.php',formData);
  }

  consultaRespuestas(jwt, id_aspirante){
    var params = '?jwt='+jwt;
    params += '&aspirante_id='+ id_aspirante;

    return this._httpClient.get(this.url +'seguimiento/formularioCleaver/consultaAspirante.php'+params);
  }
}
