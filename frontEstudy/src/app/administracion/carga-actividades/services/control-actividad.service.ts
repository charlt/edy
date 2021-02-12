import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

declare var alertify
@Injectable({
  providedIn: 'root'
})
export class ControlActividadService {
public url: string;
public jwt: string;
  

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url
   }
   guardaObjetivosPonderacion(actividad,jwt, id_actividad, id_objetivo_actividad){
     console.log(id_objetivo_actividad)

    let formData: FormData = new FormData(); 

    formData.append('jwt', jwt);
    formData.append('objetivo_docente',actividad.objetivo_docente);
    formData.append('objetivo_alumno',actividad.objetivo_alumno);
    formData.append('id_objetivos_actividad',id_objetivo_actividad);
    formData.append('id_actividad',id_actividad);



      
    return this._httpClient.post(this.url +'learning/actividad/editaObjetivos.php',formData);

  }

  reasignarCalificacion(jwt,id_actividad,tipo_calificacion){

    let formData: FormData = new FormData(); 

    formData.append('jwt', jwt);
    formData.append('id_actividad',id_actividad);
    formData.append('tipo_calificacion',tipo_calificacion);



      
    return this._httpClient.post(this.url +'learning/administracion/reasignaCalificacionActividad.php',formData);
  }

  consultaActActual(jwt){
    var params = '?jwt='+jwt;
    // params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'learning/alumno/ultimaActividadContestada.php'+params);;
  }

   consultaObjetivosActividad(jwt, id_asignatura){
    var params = '?jwt='+jwt;
    params += '&id_asignatura='+id_asignatura;
    return this._httpClient.get(this.url +'learning/asignatura/consultaObjetivos.php'+params);
  }

   consultaActividades(idAsignatura){
    var params = '?id_asignatura='+idAsignatura;
    return this._httpClient.get(this.url +'learning/asignatura/consultaActividades.php'+params);
  }

  consultaActividadDocente(idAsignatura,jwt){
    var params = '?id_asignatura='+idAsignatura;
     params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'learning/asignatura/consultaActividadesDocente.php'+params);
  }
  

  modificaActividad(actividad){
 
    let formData: FormData = new FormData(); 
    formData.append('id_actividad', actividad.actividad_id);
    
    if (actividad.actividad_padre_id != "") {
      formData.append('id_actividad_padre', actividad.actividad_padre_id); 
    }
    
    if(actividad.fecha_inicio){
      formData.append('fecha_inicio', actividad.fecha_inicio);
    }
    if (actividad.fecha_fin) {
      formData.append('fecha_fin', actividad.fecha_fin);
    }
    if (actividad.ponderacion) {
      formData.append('ponderacion', actividad.ponderacion);
    }

    var fd = new FormData();

      return this._httpClient.post(this.url +'learning/actividad/editaControl.php',formData);

  }

  
  guardaPonderaciones(id_asignatura,actividades,idRol){

    let formData: FormData = new FormData;

    formData.append('id_asignatura', id_asignatura);
    
    
    actividades.forEach(function(actividad){
      if(actividad.tipo =="2" || idRol == "1"){
        formData.append('ponderacion[]', actividad.ponderacion);
        formData.append('id_actividad[]', actividad.actividad_id);
      }
    });
        
    var fd = new FormData();

    return this._httpClient.post(this.url +'learning/asignatura/guardaPonderaciones.php',formData);
  }
  


}
