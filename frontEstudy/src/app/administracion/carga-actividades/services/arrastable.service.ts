import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArrastableService {

  url:string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consultaDragDrop(id,jwt,idMateriaFechaActividad){

    var params = '?id_pregunta='+id;
    params += '&jwt='+jwt;
    params += '&id_materia_fecha_actividad='+idMateriaFechaActividad;  
    
    return this._httpClient.get(this.url +'learning/reactivoDragDrop/consultaAleatorio.php'+params);
    }

    consultaRespuestas(id,jwt,idMateriaFechaActividad){

      var params = '?id_pregunta='+id;
      params += '&jwt='+jwt;
      params += '&id_materia_fecha_actividad='+idMateriaFechaActividad;  
      
      return this._httpClient.get(this.url +'learning/reactivoDragDrop/consultaPregunta.php'+params);
      }

  modificaDragDrop(form,id,jwt){
 
    let formData: FormData = new FormData(); 

    let items=form.get('items');

    // formData.append('reactivo_desc', form.get('reactivo_desc').value);
    formData.append('id_pregunta', id);
    
    items.value.forEach(item => {
      console.log(item);
      formData.append('reactivo_desc[]', item.reactivo_desc);
    });

    formData.append('jwt', jwt);
    

    var fd = new FormData();


      return this._httpClient.post(this.url +'learning/reactivoDragDrop/crea.php',formData);
  }



  modificaRespuestas(reactivos,id,idMateriaFechaActividad,jwt){
 
    let formData: FormData = new FormData(); 

    // formData.append('reactivo_desc', form.get('reactivo_desc').value);
    formData.append('id_respuesta', id);
    formData.append('id_materia_fecha_actividad',idMateriaFechaActividad);
    // reactivos.value.forEach(item => {
    //   console.log(item);
    //   formData.append('id_reactivo[]', item.id_reactivo);
    // });

    reactivos.forEach( reactivos => {
      console.log(reactivos.reactivo_id);
      formData.append('id_reactivo[]', reactivos.reactivo_id);
      });

    formData.append('jwt', jwt);
    

    var fd = new FormData();


      return this._httpClient.post(this.url +'learning/respuestaDragDrop/crea.php',formData);
  }

  modificaOrden(id_respuesta,orden_nuevo,id_pregunta,id_materia_fecha_actividad,jwt){
 
    let formData: FormData = new FormData(); 

    formData.append('id_respuesta', id_respuesta);
    formData.append('id_pregunta', id_pregunta);
    formData.append('orden_nuevo', orden_nuevo);
    formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
    
    formData.append('jwt',jwt);


      return this._httpClient.post(this.url +'learning/respuestaDragDrop/orden.php',formData);
  }

}
