import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style';

@Injectable({
  providedIn: 'root'
})
export class MateriasAlumnosService {
  url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

   cambiaEstatusMaterias(id_materia,id_estatus){
    var params = '?id_estatus='+id_estatus;
    params += '&id_materia='+id_materia;
    return this._httpClient.get(this.url +'learning/asignatura/cambiaEstatusAsignatura.php'+params);
  }

   consultaMaterias(id_alumno, tipo){
    var params = '?id_alumno='+id_alumno;
    params += '&activas='+tipo;
    return this._httpClient.get(this.url +'learning/alumno/consultaMaterias.php'+params);
  }

  reiniciarMateria(materia_id){
    var params = '?id_materia='+materia_id;
    return this._httpClient.get(this.url +'controlEscolar/materia/eliminaActividades.php'+params);
  }

  eliminaMateria(materia_id, grupo_id){
    var params = '?materia_id='+materia_id;
    return this._httpClient.get(this.url +'controlEscolar/alumno/eliminaMaterias.php'+params);
  }

  consultaGrupo(idOrdenAsignatura){
    var params = '?id_orden_asignatura='+idOrdenAsignatura;
    return this._httpClient.get(this.url +'controlEscolar/asignatura/consultaGrupos.php'+params);
  }

  agregaMateria(id_alumno, asignatura_grupo_id ) {
    let formData: FormData = new FormData();
    formData.append('alumno_id', id_alumno);
    formData.append('asignatura_grupo_id', asignatura_grupo_id);
    var fd = new FormData();
      return this._httpClient.post(this.url + 'controlEscolar/alumno/agregaMateria.php', formData);
  }

  agregaMateriaDocente(id_docente, asignatura_grupo_id ) {
    let formData: FormData = new FormData();
      formData.append('id_docente', id_docente);
      formData.append('id_asignatura_grupo', asignatura_grupo_id);
    return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/agregaDocente.php', formData);
  }

  eliminaAsignaturaDocente(id_docente, asignatura_grupo_id ) {
    let formData: FormData = new FormData();
      formData.append('id_docente', id_docente);
      formData.append('id_asignatura_grupo', asignatura_grupo_id);
    return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/eliminaDocente.php', formData);
  }

}
