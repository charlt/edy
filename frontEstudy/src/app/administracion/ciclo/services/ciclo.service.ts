import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CicloService {


  public url: string;
  constructor(
    private _http: Http,
    private _httpClient: HttpClient,
  ) {
    this.url = GLOBAL.url;

  }

  aperuraCiclo(ciclo, id_ciclo) {
    let formData: FormData = new FormData();
    formData.append('id_ciclo', id_ciclo);
    formData.append('num_mat_rep', ciclo.get('numMaterias').value);
    if (ciclo.get('nuevoCiclo').value == false){formData.append('id_ciclo_to', ciclo.get('ciclo').value)}
    if (ciclo.get('docGrupo').value == true) {formData.append('auto_docente', '1')} else { formData.append('auto_docente', '0') }
    if (ciclo.get('recursadores').value == true) { formData.append('auto_recursador', '1') } else { formData.append('auto_recursador', '0') }
    if (ciclo.get('reprobados').value == true) { formData.append('auto_reprobados', '1') } else { formData.append('auto_reprobados', '0') }

    return this._httpClient.post(this.url + 'controlEscolar/ciclo/aperturaCiclo.php', formData);
  }

  cierraC(ciclo_id) {
    let formData: FormData = new FormData();
    formData.append('id_ciclo', ciclo_id);
    return this._httpClient.post(this.url + 'controlEscolar/ciclo/cierreCiclo.php', formData);
  }

  consulta(jwt, id) {
    var params = '?id_ciclo=' + id;
    return this._httpClient.get(this.url + '/controlEscolar/ciclo/consulta.php' + params);
  }

  consultaGruposCiclo(id) {
    var params = '?id_ciclo=' + id;
    return this._httpClient.get(this.url + '/controlEscolar/ciclo/consultaGrupo.php' + params);
  }

  elimina(id) {
    var params = '?id_ciclo=' + id;
    return this._httpClient.get(this.url + 'controlEscolar/ciclo/elimina.php' + params);
  }

  modificaCiclos(ciclo, jwt, id_ciclo) {

    let formData: FormData = new FormData();
    formData.append('ciclo_desc', ciclo.get('nombreCiclo').value);
    formData.append('fecha_inicio', ciclo.get('fechaInicio').value);
    formData.append('fecha_fin', ciclo.get('fechaCierre').value);
    formData.append('ciclo_estatus_id', ciclo.get('cicloEstatus').value);


    var fd = new FormData();

    if (id_ciclo == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url + 'controlEscolar/ciclo/crea.php', formData);
    } else {

      formData.append('id_ciclo', id_ciclo);
      return this._httpClient.post(this.url + 'controlEscolar/ciclo/edita.php', formData);
    }
  }


}
