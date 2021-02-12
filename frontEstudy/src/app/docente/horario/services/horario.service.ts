import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from '../../../services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  consultaHorario(idAsignaturaGrupo) {
    var params = '?id_asignatura_grupo=' + idAsignaturaGrupo;
    return this._httpClient.get(this.url + '/controlEscolar/horario/consulta.php' + params);
  }

  consultaEsp(idAsignaturaGrupo,idHorario) {
    var params = '?id_horario=' + idHorario;
    params += '&id_asignatura_grupo=' + idAsignaturaGrupo;
    return this._httpClient.get(this.url + '/controlEscolar/horario/consultaEspecifica.php' + params);
  }

  elimina(idHorario) {
    var params = '?id_horario=' + idHorario;
    // params += '&id_asignatura_grupo=' + idAsignaturaGrupo;
    return this._httpClient.get(this.url + '/controlEscolar/horario/elimina.php' + params);
  }


  guardaHorario(horarioForm, idAsignaturaGrupo, horario_id) {
    let formData: FormData = new FormData();
    formData.append('id_asignatura_grupo', idAsignaturaGrupo);
    formData.append('dia', horarioForm.get('dia').value);
    formData.append('hora_inicio', horarioForm.get('horaIni').value);
    formData.append('hora_fin', horarioForm.get('horaFin').value);
    
    if (horario_id) {
      formData.append('id_horario', horario_id);
      return this._httpClient.post(this.url + '/controlEscolar/horario/edita.php', formData);
    } else {
      return this._httpClient.post(this.url + '/controlEscolar/horario/crea.php', formData);
    }
  }
}
