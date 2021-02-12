import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PrivilegiosService {
  url: string;

  constructor(  
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

   elimina(id,jwt){
    var params = '?id_privilegio='+id;
     params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'admin/privilegios/elimina.php'+params);
  }

   consulta(jwt, id){

    var params = '?id_privilegio='+id;
    params += '&jwt='+jwt;
    return this._httpClient.get(this.url +'admin/privilegios/consulta.php'+params);
  }


  
   modificaPrivilegios(privilegios, jwt, id_privilegio){ 
 
    let formData: FormData = new FormData();
    formData.append('privilegio_clave', privilegios.get('cvPrivilegio').value);
    formData.append('privilegio', privilegios.get('privilegio').value);
    formData.append('icono', privilegios.get('icono').value);
    formData.append('url', privilegios.get('url').value); 
    formData.append('jwt', jwt);


    if(privilegios.get('idPadre').value == "" ){
    }else{
      formData.append('privilegio_padre_id',privilegios.get('idPadre').value);
    }


    var fd = new FormData();
    if (id_privilegio == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'admin/privilegios/crea.php',formData);
    }else{

      formData.append('id_privilegio', id_privilegio);//EDITA 
      return this._httpClient.post(this.url +'admin/privilegios/edita.php',formData);
    }
  }

  privilegioPadre(id_nuevo, id_seleccionado, jwt){ 
 
    let formData: FormData = new FormData(); 
      formData.append('id_privilegio', id_seleccionado);
      formData.append('id_privilegio_padre', id_nuevo);
      formData.append('jwt', jwt);

      return this._httpClient.post(this.url +'admin/privilegios/editaPadre.php',formData);
  }
}