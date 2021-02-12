import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';


@Injectable({
  providedIn: 'root'
})
export class ReportesDocenteService {
  public url: string;


  constructor(
    private _http: Http,
    private _httpClient: HttpClient,
  ){
    this.url = GLOBAL.url;
  }

  consultaActividades(id_asignatura_grupo ){
    var params = '?id_asignatura_grupo='+id_asignatura_grupo ;
    return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/consultaActividades.php'+params);
  }

  // actaCalificaciones( reporteForm, idAsignaturaGrupo){
  //   var params = '?id_asignatura_grupo='+idAsignaturaGrupo ;
  //   // params += '&jwt='+this.jwt;
  //   params += '&id_actividad='+reporteForm.get('_actividades').value;
  //   params += '&fecha_inicio='+reporteForm.get('fecha_inicio').value;
  //   params += '&fecha_fin='+reporteForm.get('fecha_fin').value;
  //   window.open(this.url +'seguimiento/reportes/actaCalificaciones.php'+params, '_blank');
  // }

}
