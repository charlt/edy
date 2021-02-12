import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';   

@Injectable({
  providedIn: 'root'
})
export class AsignaturaGrupoService {

  public url: string;


  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }


   cambiaTipoMateria(tipo_materia_id, materia_id){
    var params = '?tipo_materia_id='+tipo_materia_id;
    params +='&materia_id='+ materia_id

    return this._httpClient.get(this.url +'learning/alumno/editaTipoMateriaGrupo.php'+params);
  }

   consulta(id){
    var params = '?id_asignatura_grupo='+id;
    return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/consulta.php'+params);
  }

   actualizaFechas(jwt, fechas, id){
    let formData: FormData = new FormData(); 
    formData.append('jwt', jwt);
    formData.append('fecha_inicio', fechas.get('fechaInicio').value);
    formData.append('fecha_fin', fechas.get('fechaFin').value);
    formData.append('id_asignatura_grupo', id);

    var fd = new FormData();
    return this._httpClient.post(this.url +'controlEscolar/asignaturaGrupo/edita.php',formData); 
  } 

  consultaTipoMaterias(){
   return this._httpClient.get(this.url +'/catalogosLE/tipoMateria.php');

   }

  consultaAlumnos(jwt,idAsignaturaGrupo){
    var params = '?jwt='+jwt;
      params +='&id_asignatura_grupo='+ idAsignaturaGrupo
   
   return this._httpClient.get(this.url +'/controlEscolar/asignaturaGrupo/consultaAlumnos.php'+params);

   }

   consultaReprobados(jwt,idAsignaturaGrupo){
    var params = '?jwt='+jwt;
      params +='&id_asignatura_grupo='+ idAsignaturaGrupo
   
   return this._httpClient.get(this.url +'/controlEscolar/asignaturaGrupo/consultaAlumnos.php'+params);

   }

   eliminaAlumno(jwt, id_persona ,idAsignaturaGrupo){
    var params = '?jwt='+jwt;
    params +='&id_alumno='+ id_persona;
    params +='&id_asignatura_grupo='+ idAsignaturaGrupo;
 
    return this._httpClient.get(this.url +'/controlEscolar/asignaturaGrupo/eliminaAlumno.php'+params);
   }


   insertaAlumno( alumno, idAsignaturaGrupo, idTipoMateria){
    let formData: FormData = new FormData(); ;
    formData.append('id_alumno',alumno.persona_id);
    formData.append('id_asignatura_grupo',idAsignaturaGrupo);
    formData.append('id_tipo_materia',idTipoMateria);
    
    var fd = new FormData();

      return this._httpClient.post(this.url +'controlEscolar/asignaturaGrupo/agregaAlumno.php',formData); 
  }  

  consultaActividades(idAsignaturaGrupo){
    var params = '?id_asignatura_grupo='+ idAsignaturaGrupo;
 
    return this._httpClient.get(this.url +'/controlEscolar/asignaturaGrupo/consultaActividades.php'+params);
   }


  cerrarMaterias(idAsignaturaGrupo,tipoCalculo){
    let formData: FormData = new FormData(); 
    formData.append('id_asignatura_grupo',idAsignaturaGrupo);
    formData.append('revision',tipoCalculo);
    
    var fd = new FormData();

      return this._httpClient.post(this.url +'controlEscolar/asignaturaGrupo/calificaMaterias.php',formData); 

  }

  guardarReprobados(alumnosReprobados,idAsignaturaGrupo){

    let formData: FormData = new FormData(); 

    formData.append('asignatura_grupo_id',idAsignaturaGrupo);
    formData.append('id_tipo_materia','2');

    alumnosReprobados.forEach(function(reprobado){
      if(reprobado.selected){
        formData.append('alumno_id[]',reprobado.alumno_id);

      }
    }.bind(this));

    return this._httpClient.post(this.url +'controlEscolar/asignaturaGrupo/agregaAlumnosMultiple.php',formData); 
  }

}
