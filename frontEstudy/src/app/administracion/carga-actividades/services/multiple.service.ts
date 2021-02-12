import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MultipleService {
  
  url;

  
  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
    } 

  consultaMultiple(id_pregunta,jwt,id_materia_fecha_actividad){
    var params = '?id_pregunta='+id_pregunta;
      params += '&jwt='+jwt;    
      if(id_materia_fecha_actividad){
        params += '&id_materia_fecha_actividad='+id_materia_fecha_actividad;    
      }
      return this._httpClient.get(this.url +'learning/reactivoMultiple/consultaPregunta.php'+params);
  }

  
  consultaRespuestas(id_pregunta,id_materia_fecha_actividad, intentos_restantes,aleatorio){
    var params = '?id_pregunta='+id_pregunta;
      params += '&aleatorio='+ aleatorio; 
      if(id_materia_fecha_actividad){
        params += '&intentos_restantes='+ intentos_restantes; 

        params += '&id_materia_fecha_actividad='+id_materia_fecha_actividad;    
      }
      return this._httpClient.get(this.url +'learning/reactivoMultiple/consultaRespuestas.php'+params);
  }


  elimina(id,jwt){
    var params = '?reactivo_id='+id;    
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'learning/reactivoMultiple/elimina.php'+params);
  }

    
  modificaMultiple(form,id_pregunta,jwt){

    let formData: FormData = new FormData;

    form.get('items')['controls'].forEach(function(_form){

      let ponderacion:string = _form.get('ponderacion').value ? "100" : "0" ;
      formData.append('ponderacion[]', ponderacion);
      formData.append('reactivo[]', _form.get('respuesta').value);
      formData.append('retroalimentacion[]', _form.get('retroalimentacion').value);
    });
    
    formData.append('id_pregunta', id_pregunta);
    formData.append('jwt', jwt);
  
    var fd = new FormData();

    return this._httpClient.post(this.url +'learning/reactivoMultiple/crea.php',formData);
 
  }

  modificaMultipleImagen(form,id_pregunta,jwt){

    let idReactivo =   form.get('idReactivo').value;
    let formData: FormData = new FormData(); 
    let ponderacion:string = form.get('ponderacion').value ? "100" : "0" ;
    console.log(form)
    formData.append('ponderacion', ponderacion);
    formData.append('retroalimentacion', form.get('retroalimentacion').value);
    formData.append('imagen', form.get('imagen').value);
    formData.append('id_pregunta', id_pregunta);

    formData.append('jwt', jwt);
    

    var fd = new FormData();

    if (!idReactivo) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'learning/reactivoMultipleImagen/crea.php',formData);
    }else{
      formData.append('id_reactivo', idReactivo);
      return this._httpClient.post(this.url +'learning/reactivoMultipleImagen/edita.php',formData);
    }
  }

  guardaRespuesta(idReactivo,idPregunta,id_materia_fecha_actividad,jwt){

    let formData: FormData = new FormData(); 
    
    formData.append('id_reactivo', idReactivo);
    formData.append('id_pregunta', idPregunta);
    formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);

    formData.append('jwt', jwt);
    
    var fd = new FormData();

    return this._httpClient.post(this.url +'learning/respuestaMultiple/crea.php',formData);
    
  }
  

  
  eliminaMultiple(idPregunta,id_materia_fecha_actividad,jwt){

    var params = '?id_pregunta='+idPregunta;
    params += '&id_materia_fecha_actividad='+id_materia_fecha_actividad;    
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'learning/respuestaMultiple/eliminaMultiple.php'+params);
  }

  eliminaRespuesta(idReactivo,id_materia_fecha_actividad,jwt){

    var params = '?id_reactivo='+idReactivo;
    params += '&id_materia_fecha_actividad='+id_materia_fecha_actividad;    
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'learning/respuestaMultiple/elimina.php'+params);
  }

  consultaMateria(jwt, id_pregunta) {
    var params = '?jwt='+jwt;
    params += '&pregunta_id='+id_pregunta;    
    return this._httpClient.get(this.url +'learning/reactivoMultiple/consultaMateria.php'+params);
  }
  

  editaReactivoTexto(jwt, data) {
    let ponderacion: string = data.ponderacion ? "100" : "0" ;
    let formData: FormData = new FormData(); 
    formData.append('jwt', jwt);
    formData.append('reactivo', data.respuesta);
    formData.append('ponderacion', ponderacion);
    formData.append('retroalimentacion', data.retroalimentacion);
    formData.append('id_reactivo', data.idReactivo);

    return this._httpClient.post(this.url +'learning/reactivoMultiple/edita.php',formData);
  }

  reasignaCalificacionPreguntaOM(id_pregunta,id_actividad) {
    let formData: FormData = new FormData(); 
    formData.append('id_pregunta', id_pregunta);
    formData.append('id_actividad', id_actividad);

    return this._httpClient.post(this.url +'learning/administracion/reasignaCalificacionPreguntaOM.php',formData);
  }


}
