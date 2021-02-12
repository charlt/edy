import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  url: string = GLOBAL.url;

  constructor(
    private _httpClient: HttpClient
  ) { }

  crearCargo(produccion, persona, monto, descripcion) {
    let formData = new FormData();
      formData.append('produccion', produccion);
      formData.append('name', persona.nombre);
      formData.append('last_name', persona.primer_apellido + ' ' + persona.segundo_apellido);
      formData.append('email', persona.email);
      formData.append('phone_number', persona.celular);
      formData.append('monto', monto);
      formData.append('descripcion', descripcion);


    return this._httpClient.post(this.url + 'pagos/openpay/create-charge.php', formData);
  }

}
