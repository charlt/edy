import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  public url: string;


  constructor(
    private _http: Http,
    private _httpClient: HttpClient
    ){
    this.url = GLOBAL.url;
  }

  consulta(){
    return this._httpClient.get(this.url + '/seguimiento/administracion/consultaPaso.php');
  }



}
