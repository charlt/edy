import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  url: string = GLOBAL.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  getHistorial(id_alumno) {
    let params = new HttpParams().set('id_alumno', id_alumno);

    return this.httpClient.get(this.url + 'controlEscolar/historial/consultaAlumno.php', {params:params});
  }

  catCicloEstatusHistorial() {
    return this.httpClient.get(this.url + 'catalogosCE/cicloEstatusHistorial.php');
  }

  modificaHistorial(form, id_alumno, id) {
    let formData = new FormData();
    console.log(form)
      formData.append('id_orden_asignatura', form.orden_asignatura_id);
      formData.append('id_ciclo', form.id_ciclo);
      formData.append('id_alumno', id_alumno);
      formData.append('id_estatus_historial', form.id_estatus_historial);
      formData.append('calificacion', form.calificacion);
      formData.append('materia_id', null);
      if (form.situacion_reprobatoria_id) formData.append('situacion_reprobatoria_id', form.situacion_reprobatoria_id);
      
    if (id == 0) {
      return this.httpClient.post(this.url + 'controlEscolar/historial/crea.php', formData);
    }else if (id == 1) {
      formData.append('id_historial', form.id_historial);
      return this.httpClient.post(this.url + 'controlEscolar/historial/edita.php', formData);
    }
  }

  eliminaHistorial(id_historial) {
    let formData = new FormData();
      formData.append('id_historial', id_historial);

    return this.httpClient.post(this.url + 'controlEscolar/historial/elimina.php', formData);
  }

  consultaHistorial(id_historial) {
    let params = new HttpParams().set('id_historial', id_historial);

    return this.httpClient.get(this.url + 'controlEscolar/historial/consulta.php', {params:params});
  }

  
  consultaNoAprobados(id_asignatura){
    var params = '?id_asignatura='+id_asignatura;
    return this.httpClient.get(this.url +'controlEscolar/historial/consultaNoAprobados.php'+params);
  }

  catSituacionReprobatoria(){
    return this.httpClient.get(this.url +'catalogosCE/situacionCalificacionReprobatorias.php');
  }
    

}
