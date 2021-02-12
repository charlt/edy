import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';
import { FechaService } from 'src/app/services/fecha.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  public url: string;
  public selectedAsignaturaGrupo;
  changeMenu = new EventEmitter<any>();

  constructor(
    private _http: Http,
private _httpClient: HttpClient,
    private _fechaService: FechaService
  ) {
    this.url = GLOBAL.url;
   }

   
   consulta(id){

    var params = '?id_grupo='+id;
    
    return this._httpClient.get(this.url +'controlEscolar/grupo/consulta.php'+params);
  }

   consultaAsignaturaGrupo(id){

    var params = '?id_asignatura_grupo='+id;
    
    return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/consulta.php'+params);
  }
  

  totalAlumnos(id){
    var params = '?id_asignatura_grupo='+id;

    return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/totalAlumnos.php'+params);
  }

   consultaAlumnos(id,idAsignatura,tipoBusqueda,ini,fin){

    var params = '?id_asignatura_grupo='+id;
    params += '&id_asignatura='+idAsignatura;

    if(tipoBusqueda == 1){
      return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/consultaAlumnosPendientes.php'+params);
    }else if(tipoBusqueda == 2){
      return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/consultaAlumnosMensajes.php'+params);
    }else if(tipoBusqueda == 3){
      return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/consultaAlumnosRetroalimentacion.php'+params);
    }else if(tipoBusqueda ==4){
      params += '&ini='+ini;
      params += '&fin='+fin;
      return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/consultaAlumnosCompletos.php'+params);
    }
    
  }

  busquedaAlumno(id_asignatura_grupo, busqueda) {
    let params = new HttpParams()
      .set('id_asignatura_grupo', id_asignatura_grupo).set('busqueda', busqueda);
    return this._httpClient.get(this.url + 'controlEscolar/asignaturaGrupo/busquedaAlumno.php', {params: params});
  }

  getSelectedAsignaturaGrupo(){
    let selectedAsignaturaGrupo = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo'))
    if(selectedAsignaturaGrupo !== undefined){
      this.selectedAsignaturaGrupo = selectedAsignaturaGrupo;
    }else{
      this.selectedAsignaturaGrupo = null;
    }

    return this.selectedAsignaturaGrupo;
  }

  consultaArchivos(materia_id,jwt){

    var params = '?id_materia='+materia_id;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'learning/materia/consultaArchivos.php'+params);
  }

  consultaMateria(jwt, id){
    var params = '?id_asignatura_grupo='+id;
    params += '&jwt='+jwt;

    return this._httpClient.get(this.url +'learning/materia/consultaDummy.php'+params);
  }

  consultaMenu(jwt, id_asignatura_grupo, id_materia){
    var params = '?jwt='+jwt;
    params += '&id_asignatura_grupo='+id_asignatura_grupo;
    params += '&id_materia='+id_materia;

    return this._httpClient.get(this.url +'learning/materia/menu.php'+params);
  }  

  seleccionaMateriaDummy( idAsignaturaGrupo,jwt ){
    return new Promise(resolve =>{

      this.consultaMateria(jwt, idAsignaturaGrupo).subscribe(
        response => {
          if(response && response['status']){
            let materia = response['materia'];

                        
            let arreglo =this._fechaService.validaVigencia(materia.fecha_inicio, materia.fecha_fin,1);
            
            materia.fecha_inicio = new Date(materia.fecha_inicio*1000);
            materia.fecha_fin = new Date(materia.fecha_fin*1000);
         
            materia.activa = arreglo[0];
            materia.estado = arreglo[1];
            localStorage.setItem('selectedMateria',JSON.stringify(response['materia']));
            localStorage.setItem('materias',JSON.stringify([{}]));
            let idAsignaturaGrupo = response['materia'].asignatura_grupo_id;
            let idMateria = response['materia'].materia_id;
            this.consultaMenu(jwt, idAsignaturaGrupo, idMateria).subscribe(
              response =>{
                  if(response && response['status']){
                    let actividad = [];
                    if(response['modulo']){
                      response['modulo'].forEach(function(modulo){                          
                        if(modulo.actividades && modulo.actividades.length){
                          modulo.actividades.forEach(function(actividades){
                            actividad.push(actividades.actividad_id);
                          })
                        }
                      });
                    }
                    localStorage.setItem('seriacionActividad',JSON.stringify(actividad));
                    localStorage.setItem('modulos',JSON.stringify(response['modulo']));
                    resolve(materia);
                    
                  }
              },error =>{
                console.log(<any>error)
                resolve(null);
            });
            
          }
  
        },
        error => {
          console.log(error);
          resolve(null);
        }
      )
      
    });
  }

  consultaModulos(id,nombre_modulo,jwt){
    var params = '?id_asignatura_grupo='+id;
    params += '&nombre_modulo='+nombre_modulo;
    params += '&jwt='+jwt;

    return this._httpClient.get(this.url +'learning/moduloGrupo/registra.php'+params);
  }
  
  modificaCalificacion(id_actividad, id_materia, calificacion) {
    let formData = new FormData();
      formData.append('id_actividad', id_actividad);
      formData.append('id_materia', id_materia);
      formData.append('calificacion', calificacion);

    return this._httpClient.post(this.url + 'learning/fechaActividad/registrarCalificacionDocente.php', formData);
  }

  modificaCalificacionFinal(id_alumno, calificacion, id_asignatura_grupo) {
    let formData = new FormData();
      formData.append('id_alumno', id_alumno);
      formData.append('calificacion', calificacion);
      formData.append('id_asignatura_grupo', id_asignatura_grupo);

    return this._httpClient.post(this.url + 'controlEscolar/materia/actualizaCalificacion.php', formData);
  }

  cerrarMaterias(idGrupo,tipoCalculo){
    let formData: FormData = new FormData(); 
    formData.append('id_grupo',idGrupo);
    formData.append('revision',tipoCalculo);
    
    var fd = new FormData();

      return this._httpClient.post(this.url +'controlEscolar/grupo/calificaMaterias.php',formData); 

  }
  consultaActividades(idAsignaturaGrupo){
    var params = '?id_asignatura_grupo='+idAsignaturaGrupo;
    
    return this._httpClient.get(this.url +'learning/asignatura/consultaActividadesGrupo.php'+params);
  }
  
  consultaPrivilegiosDocente() {
    return this._httpClient.get(this.url +'general/privilegios/privilegios_docente.php');
  }

  guardarPorcentajes(form, id_asignatura_grupo, id_modulo, id_actividad) {
    let formData: FormData = new FormData(); 
      formData.append('id_asignatura_grupo',id_asignatura_grupo);
      formData.append('id_modulo',id_modulo);
      formData.append('id_actividad',id_actividad);

      form.forEach(item => {
        formData.append('arreglo_actividad_id[]', item.actividad_id);
        formData.append('arreglo_ponderacion[]', item.porcentaje);
      });
    return this._httpClient.post(this.url +'controlEscolar/materia/calificacionModulo.php',formData); 
  }

  editaVisible(visible, id_actividad) {
    let params = new HttpParams()
      .set('visible', visible).set('id_actividad', id_actividad);

    return this._httpClient.get(this.url +'learning/actividad/editaVisible.php', {params: params}); 
  }
  
}
