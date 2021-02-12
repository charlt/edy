import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
  }

  consultaSolicitudPago(jwt){
    var params = '?jwt=' + jwt

    return this._httpClient.get(this.url +'seguimiento/pagos/consultaSolicitud.php'+params);
  }

  suscribir_cliente(suscripcion,nombre_tarjeta,numero_tarjeta,mes,ano,ccv,nombre,correo,jwt){

    let formData: FormData = new FormData(); 
    
    formData.append('subscription', suscripcion);
    formData.append('name', nombre);
    formData.append('email', correo);
    formData.append('holder_name', nombre_tarjeta);
    formData.append('card_number', numero_tarjeta);
    formData.append('expiration_month', mes);
    formData.append('expiration_year', ano);
    formData.append('cvv2', ccv);
    formData.append('plan_id', suscripcion);

    formData.append('jwt', jwt);


   
    return this._httpClient.post(this.url +'seguimiento/pagos/creaSuscripcion.php',formData);
    
  } 

  
  realizar_pago(nombre,apellido,celular,correo,token,monto,descripcion,sesion,jwt){

    let formData: FormData = new FormData(); 
    
    formData.append('name', nombre);
    formData.append('last_name', apellido);
    formData.append('phone_number', celular);
    formData.append('email', correo);

    formData.append('token_id', token);
    formData.append('amount', monto);
    formData.append('description', descripcion);
    formData.append('deviceIdHiddenFieldName', sesion);

    formData.append('jwt', jwt);


   
    return this._httpClient.post(this.url +'seguimiento/pagos/realizarPago.php',formData);
    
  }

  
  obtener_referencia(nombre,apellido,celular,correo,monto,descripcion,jwt){

    let formData: FormData = new FormData(); 
    
    formData.append('name', nombre);
    formData.append('last_name', apellido);
    formData.append('phone_number', celular);
    formData.append('email', correo);

    formData.append('amount', monto);
    formData.append('description', descripcion);

    formData.append('jwt', jwt);


   
    return this._httpClient.post(this.url +'seguimiento/pagos/obtenerReferencia.php',formData);
    
  }  
}