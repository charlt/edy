import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GLOBAL } from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  public url: string;
  public activaConsulta= new EventEmitter();

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  consultaEspNotas(id_alumno){
    var params = '?alumno_id=' + id_alumno;
    return this._httpClient.get(this.url + 'controlEscolar/alumno/consultaNotasAlumno.php' + params);
  }

  consultaAlumnoCarrera(id_alumno){
    var params = '?id_alumno=' + id_alumno;
    return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/consultaOfertaAlumno.php' + params);
  }

  insertaOferta(id_alumno, id_plan_orden, campus_id){
    let formData: FormData = new FormData();
    formData.append('alumno_id', id_alumno);
    formData.append('id_plan_orden', id_plan_orden);
    formData.append('campus_id', campus_id);
    return this._httpClient.post(this.url + 'controlEscolar/administracionAlumno/agregaOferta.php', formData);
  }

  eliminaOferta(id_plan_orden, id_alumno){
    var params = '?id_plan_orden=' + id_plan_orden;
        params += '&alumno_id=' + id_alumno;
    return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/eliminaOferta.php' + params);
  }

  consultaTicketsHeader(id_ticket) {
    var params = '?id_ticket=' + id_ticket;
    // params += '&id_rol=' + 2;

    return this._httpClient.get(this.url + 'controlEscolar/tickets/consultaTicket.php' + params);
  }

  consultaAccesos(id_persona) {
    var params = '?id_persona=' + id_persona;

    return this._httpClient.get(this.url + 'general/usuario/consultaAccesos.php' + params);
  }

  consultaTicketAlumno(id_persona, id_rol) {
    var params = '?id_persona=' + id_persona;
    params += '&id_rol=' + id_rol;

    return this._httpClient.get(this.url + 'general/tickets/consultaUsuario.php' + params);
  }



  consultaEspecifica(id, jwt) {
    var params = '?id_alumno=' + id;
    return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta.php' + params);
  }

  elimina(id, jwt) {
    var params = '?id_alumno=' + id;
    return this._httpClient.get(this.url + 'controlEscolar/alumno/elimina.php' + params);
  }

  modificaAlumnoOld(alumno, jwt, id_alumno) {

    let formData: FormData = new FormData();
    // console.log(alumno)
    formData.append('alumno_nombre', alumno.get('nombreAlumno').value);
    formData.append('alumno_primer_apellido', alumno.get('apPatAlumno').value);
    formData.append('alumno_segundo_apellido', alumno.get('apMatAlumno').value);
    formData.append('clave_alumno', alumno.get('claveAlumno').value);
    formData.append('sexo_id', alumno.get('sexoAlumno').value);
    formData.append('fecha_nacimiento', alumno.get('nacimientoAlumno').value);
    formData.append('correo', alumno.get('correoAlumno').value);
    formData.append('telefono_1', alumno.get('tel1Alumno').value);
    formData.append('telefono_2', alumno.get('tel2Alumno').value);
    formData.append('celular', alumno.get('celularAlumno').value);
    formData.append('rfc', alumno.get('rfcAlumno').value);
    formData.append('curp', alumno.get('curpAlumno').value);
    formData.append('cedula_profesional', alumno.get('cedulaAlumno').value);

    var fd = new FormData();

    if (id_alumno == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url + 'controlEscolar/alumno/crea.php', formData);
    } else {
      formData.append('alumno_id', id_alumno);
      return this._httpClient.post(this.url + 'controlEscolar/alumno/edita.php', formData);
    }
  }

  consultaAlumno(jwt, id_rol, busqueda, min, max, tipoForm) {
    var params = '?busqueda=' + busqueda;
    params += '&tipo_busqueda=' + tipoForm;
    params += '&id_rol=' + id_rol;
    params += '&min=' + min;
    params += '&max=' + max;
    return this._httpClient.get(this.url + '/controlEscolar/alumno/busqueda_alumno.php' + params);
  }

  consultaCurp(curp, jwt) {
    var params = '?curp=' + curp;

    return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta_curp.php' + params);
  }

  consultaCedula(id_alumno, jwt) {
    var params = '?id_alumno=' + id_alumno;

    return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta.php' + params);
  }


  modificaAlumno(cedulaForm, jwt, id) {
    let formData: FormData = new FormData();
    formData.append('cedula_profesional', '');
    formData.append('clave_alumno', cedulaForm.get('clave').value);
    formData.append('id_persona', id);
    var fd = new FormData();

    return this._httpClient.post(this.url + 'controlEscolar/alumno/creaSimple.php', formData);
  }

  cambiaOferta(jwt, id_plan_orden, alumno_id) {
    var params = '?id_plan_orden=' + id_plan_orden;
    params += '&alumno_id=' + alumno_id;

    return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/cambiaOferta.php' + params);
  }

  getTotalAlumnos(jwt) {
    return this._httpClient.get(this.url + 'controlEscolar/alumno/totalAlumnos.php');
  }

  getMatricula(jwt) {
    return this._httpClient.get(this.url + 'controlEscolar/matricula/consulta.php');
  }

  getSituacion(jwt) {
    return this._httpClient.get(this.url + 'catalogosCE/situacionAlumno.php');
  }

  creaAlumno(jwt, form) {
    let formData: FormData = new FormData();
    for (let [name, value] of form) {
      if (name == 'envia_correo') {
        if (value == false || value == 'false') {
          value = 0;
        } else if (value == true || value == 'true') {
          value = 1;
        }
      }
      formData.append(name, value);
    }
    formData.append('nombre_usuario', '');
    formData.append('password', '');

    return this._httpClient.post(this.url + 'controlEscolar/alumno/crea.php', formData);
  }

  cambiaSituacion( form, id_alumno,id_area) {
    let formData: FormData = new FormData();
    formData.append('estatus', form.situacion);
    formData.append('id_alumno', id_alumno);
    formData.append('id_area', id_area);
    formData.append('observacion', form.observacion? form.observacion: '');

    return this._httpClient.post(this.url + 'controlEscolar/administracionAlumno/cambiaSituacionAlumno.php', formData);
  }

  rollBack(id_usuario){
    let formData: FormData = new FormData();
    formData.append('id_usuario', id_usuario);

    return this._httpClient.post(this.url + 'controlEscolar/alumno/rollbackAspirante.php', formData);
  }

  getPendientes() {
    let params = new HttpParams();
    return this._httpClient.get(this.url + 'controlEscolar/pendientes/alumnos.php', {params: params});
  }
 
  busquedaFiltro(filtros, inicio, fin) {
    let params = new HttpParams() 
      .set('min', inicio)
      .set('max', fin);

    filtros.forEach(filtro => {
      params = params.set(filtro.key, filtro.value);
    });

    return this._httpClient.get(this.url + 'controlEscolar/alumno/busquedaAlumnoFiltro.php', {params: params})
  }

}
