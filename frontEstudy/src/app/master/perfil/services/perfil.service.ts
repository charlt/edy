import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }
 
  enviarImagen(id_perfil, jwt, file){

    let formData: FormData = new FormData(); 
    formData.append('id_usuario', id_perfil); 
    formData.append('imagen', file);
    // formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'/general/usuario/imagen_perfil.php',formData);
  }  

  editarDatos(form, jwt, usuario, rol, datos){
    console.log(datos);
    let formData: FormData = new FormData(); 
    formData.append('nombre', form.get('nombrePerfil').value); 
    formData.append('primer_apellido', form.get('apPatPerfil').value);
    formData.append('segundo_apellido', form.get('apMatPerfil').value);
    formData.append('curp', form.get('curpPerfil').value);
    formData.append('celular', form.get('celular').value);
    formData.append('email', form.get('email').value);
    formData.append('rfc', datos.rfc);
    formData.append('fecha_nacimiento', datos.fecha_nacimiento);
    // formData.append('email', usuario.email);
    formData.append('id_sexo', datos.sexo_id);
    formData.append('id_otros_datos', '1');
    formData.append('id_persona', datos.persona_id);
    formData.append('id_rol', rol.rol_id);
    formData.append('id_rol_old', rol.rol_id);
    formData.append('nombre_usuario', usuario.usuario);
    formData.append('estatus', '1');
    formData.append('id_usuario', usuario.usuario_id);
    // formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'/general/usuario/edita.php',formData);
  }

  editarPass(pass, jwt, id_usuario){
    
    let formData: FormData = new FormData(); 
    formData.append('contraseña', pass); 
    formData.append('id_usuario', id_usuario); 
    // formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'/general/usuario/edita_contrasena.php',formData);
  }  

  tokenPass(email){
    let formData: FormData = new FormData(); 
    formData.append('email', email); 

    return this._httpClient.post(this.url +'/general/plataforma/tokenPass.php',formData);
  }

  confirmToken(token){
    let formData: FormData = new FormData(); 
    formData.append('token', token); 

    return this._httpClient.post(this.url +'/general/plataforma/confirmaToken.php',formData);
  }

  resetPass(token, pass, id_usuario) {
    let formData: FormData = new FormData(); 
    formData.append('token', token); 
    formData.append('pass', pass); 
    formData.append('usuario_id', id_usuario); 

    return this._httpClient.post(this.url +'/general/plataforma/reestableceContraseña.php',formData);
  }
}
