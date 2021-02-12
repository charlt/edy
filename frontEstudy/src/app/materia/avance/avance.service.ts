import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AvanceService {
  url:string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

   consultaHistorial(jwt, id_materia, filtro){
    var params = '?jwt='+jwt;
    params += '&id_materia='+id_materia;
    params += '&filtro='+filtro;
 
   return this._httpClient.get(this.url +'/learning/materia/historialActividades.php'+params);
   }

   consultaAvanceGeneral(jwt, id_persona){
    var params = '?jwt='+jwt;
    params += '&id_persona='+id_persona;
   
   return this._httpClient.get(this.url +'/learning/avance/avanceGeneral.php'+params);
   }

   consultaArchivosAlumno(id_alumno){
    var params = '?alumno_id='+id_alumno;
   return this._httpClient.get(this.url +'/learning/materia/consultaArchivosGenerales.php'+params);
   }

   consultaFechasSesion(jwt, id_usuario){
    var params = '?jwt='+jwt;
     params += '&id_usuario='+id_usuario;
    
    return this._httpClient.get(this.url +'/general/plataforma/consultaAccesos.php'+params);

   }

   consultaBitacoraMes(id_usuario){
    // var params = '?id_materia='+'';
    //  params += '&jwt='+jwt;
    var params = '?id_usuario='+ id_usuario;

    return this._httpClient.get(this.url +'/learning/avance/bitacoraMes.php'+params);
  }

  consultaReporteMaterias(id_usuario){
    var params = '?id_usuario='+id_usuario;
    
    return this._httpClient.get(this.url +'/learning/avance/reporteMaterias.php' + params);
  }
}
