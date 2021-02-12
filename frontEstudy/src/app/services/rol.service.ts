import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url: string = GLOBAL.url;

  constructor(
    private _httpClient: HttpClient
  ) { }

  consultaRol(jwt, id_persona) {
    let params = new HttpParams()
      .set('jwt', jwt).set('id_persona', id_persona);

    return this._httpClient.get(this.url + 'general/usuarioRol/consulta.php', { params: params } );
  }

  setDatos(jwt, id_persona, id_usuario, id_rol, clave_usuario,tipo) {    
    let formData = new FormData();
      formData.append('jwt', jwt);
      formData.append('id_persona', id_persona);
      formData.append('id_usuario', id_usuario);
      formData.append('id_rol', id_rol);
      formData.append('clave_usuario', clave_usuario);
      

    if (tipo == 0) {
      return this._httpClient.post(this.url + 'general/usuarioRol/elimina.php', formData );
    }else if (tipo == 1) {
      return this._httpClient.post(this.url + 'general/usuarioRol/crea.php', formData );
    }
  }

}
