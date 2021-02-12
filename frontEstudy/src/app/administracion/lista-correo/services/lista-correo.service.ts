import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaCorreoService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
    }  

  consultaLista(id,jwt){
    var params = '?id_correo_grupo='+id;
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'smtp/grupoCorreo/consulta_alumno.php'+params);
  }   
  
  consultaUsuario(input,jwt){
    var params = '?busqueda='+input;
      params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/general/usuario/consulta_nombre.php'+params);
  }  

  elimina(id,jwt){
    var params = '?id_correo_grupo='+id;
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'smtp/grupoCorreo/elimina.php'+params);
  }  

  consultaEspecifica(id,jwt){
    var params = '?id_correo_grupo='+id;
      params += '&jwt='+jwt;
    return this._httpClient.get(this.url +'/smtp/grupoCorreo/consulta_alumno.php'+params);
  }   

  insertaGrupo(grupo,jwt,id_grupo){
    console.log(grupo)
    let formData: FormData = new FormData(); 
    formData.append('grupo_correo', grupo.get('nombreLista').value); 
    formData.append('id_correo_grupo', id_grupo); 
    formData.append('estatus', '1'); 
    formData.append('jwt', jwt);

    if (id_grupo != null) { 
      return this._httpClient.post(this.url +'/smtp/grupoCorreo/edita.php',formData); 
    }else {
      return this._httpClient.post(this.url +'/smtp/grupoCorreo/crea.php',formData);
    }
  }  

  insertaUsuario(id_grupo,jwt,usuario){
 
    let formData: FormData = new FormData(); 
    formData.append('id_grupo_correo', id_grupo); 
    usuario.forEach(user => {
      formData.append('id_usuario[]', user);
    });
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'/smtp/grupoCorreo/inserta_alumno.php',formData);
  }

  eliminarUsuarios(id_grupo, jwt){
      var params = '?id_grupo_correo='+ id_grupo;
      params += '&jwt=' + jwt;          
      return this._httpClient.get(this.url +'/smtp/grupoCorreo/elimina_alumno.php'+ params);      
  }

}
