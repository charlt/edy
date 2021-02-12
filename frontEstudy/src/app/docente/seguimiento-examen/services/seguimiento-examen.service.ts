import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoExamenService {


  public url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }
  seguimiento(id_asignatura_grupo){
    var params = '?id_asignatura_grupo=' + id_asignatura_grupo;
    return this._httpClient.get(this.url + 'learning/seguimientoActividad/seguimientoExamen.php' + params);
  }
}
