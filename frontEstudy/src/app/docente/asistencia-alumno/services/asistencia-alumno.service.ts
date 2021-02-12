import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';


@Injectable({
  providedIn: 'root'
})
export class AsistenciaAlumnoService {
  url;
  constructor(
    private _http: Http,
    private _httpClient: HttpClient,
    // private _fechaService: FechaService
  ) {
    this.url = GLOBAL.url;
  }

  consultaClases(idAsignaturaGrupo) {
    var params = '?id_asignatura_grupo=' + idAsignaturaGrupo;
    return this._httpClient.get(this.url + 'controlEscolar/asistencia/consultaClases.php' + params);
  }

  consultaEspecifica(clase_id) {
    var params = '?id_clase=' + clase_id;
    return this._httpClient.get(this.url + 'controlEscolar/asistencia/consulta.php' + params);
  }

  creaClase(aviso, idAsignaturaGrupo, id_clase) {

    let formData: FormData = new FormData();
    formData.append('nombre_clase', aviso.get('nombreClase').value);
    formData.append('desc_clase', aviso.get('descClase').value);
    formData.append('fecha_clase', aviso.get('fechaClase').value);
    formData.append('id_asignatura_grupo', idAsignaturaGrupo);

    if (id_clase == null) {
      return this._httpClient.post(this.url + 'controlEscolar/asistencia/creaClase.php', formData);
    } else {
      formData.append('id_clase', id_clase);
      return this._httpClient.post(this.url + 'controlEscolar/asistencia/editaClase.php', formData);
    }
  }

  creaInasistencia(id_persona, id_clase) {

    let formData: FormData = new FormData();
    formData.append('id_persona', id_persona);
    formData.append('id_clase', id_clase);

    return this._httpClient.post(this.url + 'controlEscolar/asistencia/creaInasistencia.php', formData);
  }
}