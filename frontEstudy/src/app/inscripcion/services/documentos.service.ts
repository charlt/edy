import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;    
  }

  consultaDocumentos(jwt, id_aspirante, tipo, filtro){
    var params = '?jwt=' + jwt;
    params += '&filtro=' + filtro;
    if (tipo == 0) {
      params += '&id_aspirante=' + id_aspirante;
      return this._httpClient.get(this.url +'seguimiento/aspirante/consultaDocumentos.php'+params);
    }else {
      params += '&id_persona=' + id_aspirante;
      return this._httpClient.get(this.url +'controlEscolar/docente/consultaDocumentos.php'+params);
    }
  }

  catalogoEstadoDocumentos(jwt){
    var params = '?jwt=' + jwt
    return this._httpClient.get(this.url +'catalogoSG/estadoDocumento.php'+params);
  }

  guardarDocumento(jwt, file, id_documento, id_persona, tipo){
    let formData: FormData = new FormData();
    formData.append('id_documento', id_documento);
    formData.append('documento', file);
    formData.append('id_persona', id_persona);
    formData.append('jwt', jwt);
    if (tipo == 0) {
      return this._httpClient.post(this.url +'seguimiento/aspirante/guardarDocumento.php', formData);
    } else {
      return this._httpClient.post(this.url +'controlEscolar/docente/guardarDocumento.php', formData);
    }
  }

  editarDocumento(jwt, file, id, id_persona, tipo){
    let formData: FormData = new FormData();
    formData.append('expediente_id', id.id_expediente);
    formData.append('id_documento', id.id_documento);
    formData.append('id_persona', id_persona);
    formData.append('documento', file);
    formData.append('jwt', jwt);
    if (tipo == 0) {
      return this._httpClient.post(this.url +'seguimiento/aspirante/editarDocumento.php', formData);
    } else {
      return this._httpClient.post(this.url +'controlEscolar/docente/editarDocumento.php', formData);
    }
  }

  validarDocumento(id_estado_documento, id_expediente,id_documento,id_persona, descripcion, tipo){
    let formData: FormData = new FormData();
    formData.append('id_estado_documento', id_estado_documento);
    if(id_expediente){
      formData.append('id_expediente', id_expediente);
    }
    formData.append('id_documento', id_documento);
    formData.append('id_persona', id_persona);


    formData.append('expediente_desc', descripcion);

    if (tipo == 0) {
      return this._httpClient.post(this.url +'seguimiento/administracion/validarDocumento.php',formData);
    }else {
      return this._httpClient.post(this.url +'controlEscolar/docente/validarDocumento.php',formData);
    }
    
  }

  enviaCorreoDocumentacion(jwt, id_persona){
    let formData: FormData = new FormData();
      formData.append('id_persona', id_persona);
      formData.append('jwt', jwt);
    return this._httpClient.post(this.url +'seguimiento/administracion/documentacionCompleta.php', formData);
  }

  eliminaDocumento(id_expediente, url, tipo){
    let formData: FormData = new FormData();
      formData.append('id_expediente', id_expediente);
      formData.append('url_documento', url);
      if (tipo == 0) {
        return this._httpClient.post(this.url +'seguimiento/administracion/eliminaDocumento.php', formData);
      } else {
        return this._httpClient.post(this.url +'controlEscolar/docente/eliminaDocumento.php', formData);
      }
  }

  consultaEtiquetas() {
    // var params = '?jwt=' + jwt
    return this._httpClient.get(this.url +'seguimiento/administracion/consultaEtiquetas.php');  }
}

