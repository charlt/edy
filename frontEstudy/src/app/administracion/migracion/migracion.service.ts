import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MigracionService {
  url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

   layout(archivo){
    let formData: FormData = new FormData(); 
    formData.append('documento', archivo.get('contenido').value);
    
    var fd = new FormData();

    return this._httpClient.post(this.url +'extras/excel/layout.php',formData);
  }  
}
