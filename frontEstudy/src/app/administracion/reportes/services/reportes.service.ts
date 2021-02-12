import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  url: string;

  constructor(  
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

  

   consulta(id){
    var params = '?id_reporte='+id;
    return this._httpClient.get(this.url +'reportes/administracion/consulta.php'+params);
  }

   consultaObjeto(id){
    var params = '?id_reporte='+id;
    return this._httpClient.get(this.url +'reportes/administracion/consultaObjetos.php'+params);
  }

  consultaVistas(id){
    var params = '?id_objeto='+id;
    return this._httpClient.get(this.url +'reportes/administracion/consultaVistas.php'+params);
  }

  


}