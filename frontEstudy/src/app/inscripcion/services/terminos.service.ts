import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TerminosService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
  }

  consultaPlanVigente(idCarrera,jwt){
    var params = '?jwt=' + jwt;
    params += '&id_carrera=' + idCarrera;

    return this._httpClient.get(this.url +'admin/carrera/consultaUltimoPlanVigente.php'+params);
    
    
  }

  
  actualizaTerminos(idCarrera,jwt){
    var params = '?jwt=' + jwt;
    params += '&id_carrera=' + idCarrera;
    
    return this._httpClient.get(this.url +'seguimiento/aspirante/aceptarTerminos.php'+params);
    
  }

}
