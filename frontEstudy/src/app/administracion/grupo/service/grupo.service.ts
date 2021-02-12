import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GLOBAL } from '../../../services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  public url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  consultaGrupo(jwt) {
    var params = '?jwt=' + jwt;
    return this._httpClient.get(this.url + '/catalogosCE/grupo.php' + params);
  }


  consultaAlumnosGrupo(id, jwt) {
    var params = '?id_grupo=' + id;
    return this._httpClient.get(this.url + '/controlEscolar/grupo/consultaAlumnosRegulares.php' + params);
  }

  consultaCiclo(jwt) {
    return this._httpClient.get(this.url + '/catalogosCE/ciclo.php');
  }

  consultaEspecifica(id, jwt) {
    var params = '?id_grupo=' + id;

    return this._httpClient.get(this.url + '/controlEscolar/grupo/consulta.php' + params);
  }

  consultaAsignatura(id, jwt) {
    var params = '?id_grupo=' + id;

    return this._httpClient.get(this.url + '/controlEscolar/grupo/consultaAsignaturas.php' + params);
  }

  consultaDocenteAsignatura(id_asignatura_grupo, jwt) {
    var params = '?id_asignatura_grupo=' + id_asignatura_grupo;

    return this._httpClient.get(this.url + '/controlEscolar/asignaturaGrupo/consultaDocente.php' + params);
  }

  elimina(id, jwt) {
    var params = '?id_grupo=' + id;
    return this._httpClient.get(this.url + 'controlEscolar/grupo/elimina.php' + params);
  }
  modificaGrupo(grupo, jwt, id_grupo) {
    let formData: FormData = new FormData();
    formData.append('grupo', grupo.get('claveGrupo').value);
    formData.append('nombre_grupo', grupo.get('nombreGrupo').value);
    formData.append('descripcion', grupo.get('descripcion').value);
    formData.append('cupo', grupo.get('cupo').value);
    formData.append('id_ciclo', grupo.get('idCiclo').value);
    formData.append('id_plan_orden', grupo.get('plan_orden_id').value);
    formData.append('id_campus', grupo.get('campus').value);

    var fd = new FormData();

    if (id_grupo == null) {// INSERTA UN NUEVO REGISTRO


      grupo.get('alumnos')['controls'].forEach(function (alumno) {

        if (alumno.get('idAlumno').value) {
          formData.append('alumno_id[]', alumno.get('idAlumno').value);
        }
      });

      grupo.get('asignaturas')['controls'].forEach(function (asignatura) {

        if (asignatura.get('idOrdenAsignatura').value != false) {
          formData.append('orden_asignatura_id[]', asignatura.get('idOrdenAsignatura').value);
        }
      });

      if (grupo.get('completo').value) {
        return this._httpClient.post(this.url + 'controlEscolar/grupo/creaCompleto.php', formData);
      } else {
        return this._httpClient.post(this.url + 'controlEscolar/grupo/crea.php', formData);
      }

    } else {
      formData.append('id_grupo', id_grupo);
      formData.append('id_situacion_grupo', '1');
      return this._httpClient.post(this.url + 'controlEscolar/grupo/edita.php', formData);
    }
  }

  agregaGrupoAsignatura(id_orden_asignatura, id_grupo, jwt) {
    let formData: FormData = new FormData();

    formData.append('id_grupo', id_grupo);
    formData.append('id_orden_asignatura', id_orden_asignatura);

    return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaAsignatura.php', formData);
  }

  agregaAsignaturaDocente(id_asignatura_grupo, id_docente, jwt) {

    let formData: FormData = new FormData();
    formData.append('id_docente', id_docente);
    formData.append('id_asignatura_grupo', id_asignatura_grupo);
    return this._httpClient.post(this.url + 'controlEscolar/asignaturaGrupo/agregaDocente.php', formData);
  }

  tranfiereGrupo(form,id_grupo, tipoForm) {
    let formData: FormData = new FormData();
    formData.append('id_ciclo', form.get('ciclo').value);
    formData.append('id_grupo', id_grupo);


    if(form.get('validacionReprobadas').value == 1){
      formData.append('materia_aceptadas','99');
    }else{
      formData.append('materia_aceptadas',form.get('numMateria').value);
    }

    if(tipoForm==1){
      formData.append('nombre_grupo', form.get('nombre').value);
      formData.append('grupo_clave', form.get('clave').value);
    }

    return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaGrupo.php', formData);
  }

  agregaAlumnoGrupo(id_alumno, id_grupo, jwt) {
    let formData: FormData = new FormData();

    formData.append('id_grupo', id_grupo);
    formData.append('id_alumno', id_alumno);

    return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaAlumno.php', formData);
  }

  eliminaGrupoAsignatura(id, jwt) {
    var params = '?id_asignatura_grupo=' + id;
    return this._httpClient.get(this.url + 'controlEscolar/grupo/eliminaAsignatura.php' + params);
  }

  eliminaAlumnoGrupo(id_alumno, id_grupo, jwt) {
    var params = '?id_alumno=' + id_alumno;
    params += '&id_grupo=' + id_grupo;
    return this._httpClient.get(this.url + 'controlEscolar/grupo/eliminaAlumno.php' + params);
  }


  consultaGrupoFiltro(tipo, filtro) {
    let params = new HttpParams().set('tipo', tipo).set('filtro', filtro);
    return this._httpClient.get(this.url + 'controlEscolar/grupo/filtro.php', {params: params});
  }
}
