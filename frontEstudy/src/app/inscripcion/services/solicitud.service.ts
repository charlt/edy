import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
  }

  consultaFormularios(jwt, id_aspirante){
    var params = '?jwt=' + jwt;
    params += '&id_aspirante=' + id_aspirante;

    return this._httpClient.get(this.url +'seguimiento/aspirante/consultaFormulario.php'+params);
  }

  consultaAvance(jwt, id_aspirante){
    var params = '?jwt=' + jwt;
    params += '&id_aspirante=' + id_aspirante;

    return this._httpClient.get(this.url +'seguimiento/aspirante/pasos.php'+params);
  }

  consultaPersona(id_persona){
    var params = '?id_persona=' + id_persona;

    return this._httpClient.get(this.url +'admin/personas/consulta.php'+params);
  }

  actualizaInfoPersonal(id_persona){

    var params = '?id_persona=' + id_persona;

    return this._httpClient.get(this.url +'seguimiento/aspirante/actualizaInfoPersonal.php'+params);
  }

  guardaAsesorPersona(asesor) {
    let formData = new FormData();
      formData.append('id_asesor', asesor? asesor.persona_id: null);
    return this._httpClient.post(this.url + 'seguimiento/asesor/guardaAlumno.php', formData);
  }
}