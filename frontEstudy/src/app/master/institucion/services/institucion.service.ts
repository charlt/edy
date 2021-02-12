import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InstitucionService {
  url: string;


  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;

   }

   elimina(id,jwt){
    var params = '?id_institucion='+id;
     params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'admin/instituciones/elimina.php'+params);
  }

   consulta(jwt, id){

    var params = '?id_institucion='+id;
    params += '&jwt='+jwt;
    return this._httpClient.get(this.url +'/admin/instituciones/consulta.php'+params);
  }

   modificaInstitucion(instituciones, jwt,id_institucion){ 
 
    let formData: FormData = new FormData(); 
    formData.append('institucion_nombre', instituciones.get('nombreInstitucion').value);
    formData.append('clave_institucion', instituciones.get('cvInstitucion').value);
    formData.append('id_institucion_tipo', instituciones.get('tipoInstitucion').value);
    formData.append('origen', '1');
    formData.append('jwt', jwt);
    

    var fd = new FormData();

    if (id_institucion == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'admin/instituciones/crea.php',formData);
    }else{

      formData.append('id_institucion', id_institucion);//EDITA 
      return this._httpClient.post(this.url +'admin/instituciones/edita.php',formData);
    }
  }
}
