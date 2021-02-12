import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
    }

  elimina(id,jwt){
    var params = '?id_correo='+id;
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'smtp/correo/elimina.php'+params);
  }  

  consultaCorreo(id,jwt){
    var params = '?id_correo='+id;
      params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/smtp/correo/consulta.php'+params);
  }
  
  modificaCorreo(correo,jwt,id_correo){
 
    let formData: FormData = new FormData(); 
    console.log(correo)
    formData.append('correo_from', '');
    formData.append('correo_to', '');
    formData.append('correo_cc', correo.get('copiaCorreo').value);
    formData.append('correo_bco', correo.get('ocultaCorreo').value);
    formData.append('correo_subject', correo.get('asuntoCorreo').value); 
    formData.append('correo_body', correo.get('textoCorreo').value);
    formData.append('id_configuracion', '1');
    formData.append('id_correo_estatus', '1');
    formData.append('id_correo', id_correo);
    formData.append('estatus', '1');
    formData.append('jwt', jwt);
    
    var fd = new FormData();

    if (id_correo == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'smtp/correo/crea.php',formData);
    }else{
      return this._httpClient.post(this.url +'smtp/correo/edita.php',formData);
    }
  }   

  enviarArchivo(id_correo, jwt, file){

    let formData: FormData = new FormData(); 
    formData.append('id_correo', id_correo); 
    formData.append('fileToUpload', file);
    formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'/smtp/correo/carga_archivo.php',formData);
  }  

  enviarCorreo(id_correo, jwt, grupo){

    let formData: FormData = new FormData(); 
    formData.append('id_correo', id_correo); 
    formData.append('id_grupo_correo', grupo.get('catGrupos').value);
    formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'/extras/correo/listaCorreos.php',formData);
  }

  consultaLista(id,jwt){
    var params = '?id_correo_grupo='+id;
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'smtp/grupoCorreo/consulta_alumno.php'+params);
  }   
}
