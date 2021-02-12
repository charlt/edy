import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  public url: string;
  public jwt:string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

  editaPass(jwt, id_usuario, pass){
    let formData: FormData = new FormData(); 
    formData.append('jwt', jwt); 
    formData.append('id_usuario', id_usuario);
    formData.append('contraseña', pass);

    return this._httpClient.post(this.url +'general/usuario/edita_contrasena.php', formData);

  }
}
