import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  url: string;
  urlPagos: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }


  creaOrganizacion(formData) {
    return this._httpClient.post(this.url + 'facturacion/solicitud/creaOrganizacion.php', formData);

  }

  getOrganizaciones(){
    return this._httpClient.get(this.url + 'facturacion/solicitud/getOrganizaciones.php');

  }

  getCarrerasOrg(){
    return this._httpClient.get(this.url + 'facturacion/solicitud/getCarrerasOrganizaciones.php');

  }
}
