import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  consultaUsuario(input, jwt) {
    var params = '?busqueda=' + input;
    // params += '&jwt=' + jwt;

    return this._httpClient.get(this.url + '/general/usuario/consulta_nombre.php' + params);
  }

  busquedaCorreoUsuario(busqueda, tipo){
    var params = '?busqueda=' + busqueda;
    params += '&tipoBusqueda=' + tipo;
    return this._httpClient.get(this.url + '/general/usuario/consultaUsuarioCorreo.php' + params);
  }

  elimina(id, jwt) {
    var params = '?id_persona=' + id;
    // params += '&jwt=' + jwt;
    return this._httpClient.get(this.url + 'general/usuario/elimina.php' + params);
  }

  consultaEspecifica(id, id_rol, jwt) {
    var params = '?id_usuario=' + id;
    var params = '?id_rol=' + id_rol;
    // params += '&jwt=' + jwt;

    return this._httpClient.get(this.url + 'general/usuario/consulta.php' + params);
  }

  consultaUsuariosRol(id_rol,persona_id) {
    var params = '?persona_id=' + persona_id;
        params += '&id_rol=' + id_rol;

    // var params = '?id_rol=' + id_rol;

    return this._httpClient.get(this.url + 'general/usuario/consultaEspecificaRoles.php' + params);
  }

  modificaUsuario(usuario, id_usuario, id_persona, id_rol, color, correo) {

    let formData: FormData = new FormData();
    formData.append('nombre', usuario.get('nombreUsuario').value);
    formData.append('primer_apellido', usuario.get('apPatUsuario').value);
    formData.append('segundo_apellido', usuario.get('apMatUsuario').value);
    formData.append('id_sexo', usuario.get('sexoUsuario').value)
    formData.append('curp', usuario.get('curpUsuario').value);
    formData.append('rfc', usuario.get('rfcUsuario').value);
    formData.append('fecha_nacimiento', usuario.get('fnUsuario').value);
    formData.append('email', usuario.get('correoUsuario').value);
    formData.append('celular', usuario.get('celular').value);
    formData.append('nombre_usuario', usuario.get('usuario').value);
    formData.append('contraseña', usuario.get('passUsuario').value);
    formData.append('id_rol', usuario.get('catRoles').value);
    formData.append('id_otros_datos', '1');
    formData.append('estatus', '1');
    formData.append('clave_usuario', usuario.get('clave').value);
    formData.append('color', color);
    formData.append('plan_orden_id', usuario.get('plan_orden_id').value);
    formData.append('enviar_correo', correo);
    formData.append('id_area', usuario.get('catArea').value);
    formData.append('tipo_consulta', usuario.get('tipoConsulta').value);
    formData.append('id_campus', usuario.get('campus').value);
    formData.append('carrera_id', usuario.get('catCarreraAspirante').value);
    
    if (id_usuario == null) {
      return this._httpClient.post(this.url + 'general/usuario/crea.php', formData);
    } else {
      formData.append('id_usuario', id_usuario);
      formData.append('id_persona', id_persona);
      formData.append('id_rol_old', id_rol)
      formData.append('id_rol_new', usuario.get('catRoles').value);
      return this._httpClient.post(this.url + 'general/usuario/edita.php', formData);
    }
  }

  editaUsuarioRol(usuario, id_persona, id_rol){
    let formData: FormData = new FormData();

    formData.append('clave', usuario.get('clave').value);
    formData.append('plan_orden_id', usuario.get('plan_orden_id').value);
    formData.append('id_area', usuario.get('catArea').value);
    formData.append('tipo_consulta', usuario.get('tipoConsulta').value);
    formData.append('id_campus', usuario.get('campusUs').value);
    
      formData.append('persona_id', id_persona);
      formData.append('id_rol_old', id_rol)
      formData.append('tipo_consulta', usuario.get('tipoConsulta').value);
      formData.append('id_rol_new', usuario.get('catRoles').value);
      formData.append('area_id', usuario.get('catArea').value);
      return this._httpClient.post(this.url + 'general/usuario/editaRolesUsuario.php', formData);
    }


  consultaCurp(curp, jwt) {
    var params = '?curp=' + curp;
    // params += '&jwt=' + jwt;

    return this._httpClient.get(this.url + '/general/usuario/consulta_curp.php' + params);
  }

  editaNombreUsuario(nombre_usuario, id_usuario) {
    let formData: FormData = new FormData();
      formData.append('nombre_usuario', nombre_usuario);
      formData.append('id_usuario', id_usuario);
    return this._httpClient.post(this.url + 'general/usuario/editaUsuario.php', formData);
  }
}
