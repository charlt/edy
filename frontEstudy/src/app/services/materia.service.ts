import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from './global';
import { map } from 'rxjs/operators';
import { FechaService } from './fecha.service';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  public url: string;
  public urlAssets: string;
  selectedMateria;
  materias;
  seriacionActividad;
  idSeriacionActividad;
  modulos;

  materiaActualizada = new EventEmitter<any>();
  actividadesCargadas = new EventEmitter<any>();


  constructor(
    private _http: Http,
private _httpClient: HttpClient,    
    private _fechaService: FechaService
    ){
    this.url = GLOBAL.url;
    this.urlAssets = GLOBAL.urlAssets;
  }

  consultaMateriasCompletas(jwt){
    var params = '?jwt='+jwt;
    // params += '&id_usuario='+id_usuario;
    
    return this._httpClient.get(this.url +'learning/alumno/consultaMateriasCompletas.php'+params);
  }

  consultaNotif(id_alumno){
    var params = '?alumno_id='+id_alumno;
    return this._httpClient.get(this.url +'learning/notificaciones/actividadesPendientes.php'+params);
  }


  consultaRetros(jwt, idMateria){
    var params = '?jwt='+jwt;
    params += '&id_materia='+idMateria;
    
    return this._httpClient.get(this.url +'learning/notificaciones/retroalimentacionAlumno.php'+params);
  }

  consultaNumMensajes(jwt, id_materia){
    var params = '?jwt='+jwt;
    params += '&id_materia='+id_materia;
    
    return this._httpClient.get(this.url +'learning/notificaciones/mensajeriaAlumno.php'+params);
  }

  consultaNumAvisos(jwt,  id_materia){
    var params = '?jwt='+jwt;
    params += '&id_materia='+id_materia;
    
    return this._httpClient.get(this.url +'learning/materia/consultaNumAvisos.php'+params);
  }

  consultaAvisos( id_materia){  
    var params = '?id_materia='+id_materia;
    return this._httpClient.get(this.url +'learning/materia/consultaAvisos.php'+params);
  }

  consultaAlumno(id_materia,jwt){  
    var params = '?jwt='+jwt;
    params += '&id_materia='+id_materia;
    
    return this._httpClient.get(this.url +'learning/materia/consultaAlumno.php'+params);
  }

  seleccionaMaterias(id_alumno,tipo) {
    return new Promise(resolve =>{
    
      
      this.consultaAlumnoMaterias( id_alumno,tipo).subscribe(
        response =>{
          if(response && response['status']){
            this.materias = response['materias'];
            
            this.materias.forEach(_materia => {
  
              let arreglo =this._fechaService.validaVigencia(_materia.fecha_inicio, _materia.fecha_fin,1);
  
              _materia.fecha_inicio = new Date(_materia.fecha_inicio*1000);
              _materia.fecha_fin = new Date(_materia.fecha_fin*1000);
  
              _materia.activa = arreglo[0];
              _materia.estado = arreglo[1];
  
              if (_materia && _materia.url_imagen_previa) {
                _materia.url_imagen_previa = this.urlAssets + _materia.url_imagen_previa;
              }else{
                _materia.url_imagen_previa =  "assets/images/learning/imgpreviamateria.jpg";
              }
              
            });                    
            localStorage.setItem('materias',JSON.stringify(this.materias));
            resolve(this.materias);

            }else{            
              resolve(null);
              console.log(response['msg'])
            }          
        },error => {
          console.log(error);
          resolve(null);
        }); 
        
      });

    
  }


  seleccionaMateria( id,jwt ){
    return new Promise(resolve =>{
      this.consulta(jwt,id).subscribe(
        response => {
          console.log(response);
          
          if(response && response['status']){
            let materia =response['materia'][0];
            
            let arreglo =this._fechaService.validaVigencia(materia.fecha_inicio, materia.fecha_fin,1);
            
            materia.fecha_inicio = new Date(materia.fecha_inicio*1000);
            materia.fecha_fin = new Date(materia.fecha_fin*1000);
         
            materia.activa = arreglo[0];
            materia.estado = arreglo[1];

            localStorage.setItem('selectedMateria',JSON.stringify(materia));
            let idAsignaturaGrupo = materia.asignatura_grupo_id;
            this.consultaMenu(jwt, idAsignaturaGrupo,id).subscribe(
              response =>{
                console.log(response);
                
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

                    
                    
                  }else{
                    localStorage.setItem('seriacionActividad',null);
                    localStorage.setItem('modulos',null);
                  }
                  resolve(materia);
              },error =>{
                console.log(<any>error)
                localStorage.setItem('seriacionActividad',null);
                    localStorage.setItem('modulos',null);
                resolve(materia);
                
            });
            
          }else{
            console.log(response['msg'])
            resolve(null);
          }

        },
        error => {
          console.log(error)
          resolve(null);
        }
      )
    });
  }


  consulta(jwt, id){

    var params = '?id_materia='+id;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'learning/materia/consulta.php'+params);
  }

  consultaAvance(id_materia,id_asignatura, jwt){

    var params = '?id_materia='+id_materia;
    params += '&id_asignatura='+id_asignatura;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'learning/materia/avance.php'+params);
  }

  consultaMenu(jwt, id_asignatura_grupo,id_materia){
    var params = '?jwt='+jwt;
    params += '&id_asignatura_grupo='+id_asignatura_grupo;
    params += '&id_materia='+id_materia;

      return this._httpClient.get(this.url +'learning/materia/menu.php'+params);
  }  

  calculadoraPromedios(id_materia,jwt){
    var params = '?id_materia='+id_materia;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/materia/calificacionActividades.php'+params);
  }


  getMaterias(){
    let materias = JSON.parse(localStorage.getItem('materias'))
    if(materias !== undefined){
      this.materias = materias;
    }else{
      this.materias = null;
    }

    return this.materias;
  }

  cambioMateria(){
    this.materiaActualizada.emit();
  }


  getSelectedMateria(){
    let selectedMateria = JSON.parse(localStorage.getItem('selectedMateria'))
    if(selectedMateria !== undefined){
      this.selectedMateria = selectedMateria;
    }else{
      this.selectedMateria = null;
    }

    

    return this.selectedMateria;
  }

  getSeriacionActividad(){
    let seriacionActividad = JSON.parse(localStorage.getItem('seriacionActividad'))
    if(seriacionActividad !== undefined){
      this.seriacionActividad = seriacionActividad;
    }else{
      this.seriacionActividad = null;
    }

    return this.seriacionActividad;
  }

  getModulos(){
    
    let modulos;
    
    if(localStorage.getItem('modulos') != "undefined") modulos = JSON.parse(localStorage.getItem('modulos'));

    if(modulos !== undefined){
      this.modulos = modulos;
    }else{
      this.modulos = null;
    }

    return this.modulos;
  }

  getAvance(id_materia,jwt ){
    var params = '?jwt='+jwt;
    params += '&id_materia='+id_materia;
      return this._httpClient.get(this.url +'learning/materia/avance.php'+params);
  }

  consultaAlumnoMaterias(id_alumno,activas){
    var  params = '?id_alumno='+id_alumno;
      params += '&activas='+activas;

      return this._httpClient.get(this.url +'learning/alumno/consultaMaterias.php'+params);
  } 

  getCalificaciones(id_materia){
    var  params = '?id_materia='+id_materia;
    return this._httpClient.get(this.url +'learning/materia/consultaCalificacionBloque.php'+params);
  } 

}
