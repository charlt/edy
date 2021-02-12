import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL }  from '../../services/global';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  public url: string;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }

  // inicializaExamen(){
  //   let formData: FormData = new FormData(); 
      
  
  //   return this.httpClient.post(this.url +'/learning/proctoring/creaAlumno.php',formData);
  // }  

  guardarEvent(tipo, id_materia_fecha_actividad){
    let formData: FormData = new FormData();       
      formData.append('tipo', tipo);
      formData.append('materia_fecha_actividad_id', id_materia_fecha_actividad);

    return this.httpClient.post(this.url +'/learning/seguimientoActividad/editaTeclas.php',formData);
  }

}
