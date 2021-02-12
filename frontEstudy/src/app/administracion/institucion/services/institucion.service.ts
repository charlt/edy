import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { GLOBAL } from '../../../services/global';


@Injectable({
  providedIn: 'root'
})
export class InstitucionService {
  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
    
  ){ 
    this.url = GLOBAL.url;

  }

  imagen(form, crea, jwt){

    let formData: FormData = new FormData(); 
    formData.append('fileToUpload', form.get('imagen').value);
    formData.append('color', form.get('color').value);
    formData.append('jwt', jwt);
    
    if(crea){
      return this._httpClient.post(this.url +'admin/InstitucionPlataforma/crea.php',formData);
    }else{
      return this._httpClient.post(this.url +'admin/InstitucionPlataforma/edita.php',formData);
    }
    
  }  

  cambioHeader(jwt){
    var params = '?jwt='+jwt;
    return this._httpClient.get(this.url +'admin/InstitucionPlataforma/consulta.php'+ params);

  }

}
