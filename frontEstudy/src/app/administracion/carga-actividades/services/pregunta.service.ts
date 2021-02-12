import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
	url:string;

  preguntaEliminada = new EventEmitter<any>();
  
  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
    }

    getPonderacion(){
      // console.log(this.preguntaEliminada);
      let ponderacion= localStorage.getItem('ponderacion')
      console.log(ponderacion);
      localStorage.removeItem('ponderación')
      return ponderacion;
    }

    consulta(idDatosPregunta,jwt){

      var params = '?id_datos_pregunta='+idDatosPregunta;
      params += '&jwt='+jwt;    
      
      return this._httpClient.get(this.url +'learning/datosPregunta/consulta.php'+params);
      }

  	consultaTipoPregunta(jwt,idTipoActividad){
    
    var params = '?jwt='+jwt;
    params += '&id_tipo_actividad='+idTipoActividad;    
    
    return this._httpClient.get(this.url +'catalogosLE/tipoPregunta.php'+params);
    }

    eliminaArchivo(jwt, id_pregunta, tipoPregunta ){
      let formData: FormData = new FormData(); 
      formData.append('jwt', jwt);
      formData.append('id_pregunta', id_pregunta);
      formData.append('id_tipo_pregunta', tipoPregunta);

      return this._httpClient.post(this.url +'learning/contenidoPregunta/eliminaContenido.php',formData);
    }
    
  	consultaContenidoPregunta(idDatosPregunta,idTipoPregunta,jwt){

      var params = '?id_datos_pregunta='+idDatosPregunta;
      params += '&id_tipo_pregunta='+idTipoPregunta;    
      params += '&jwt='+jwt;    
      
      return this._httpClient.get(this.url +'learning/contenidoPregunta/consulta.php'+params);
      }
    
    consultaDificultad(jwt){

      var params =  '?jwt='+jwt;
      
      return this._httpClient.get(this.url +'catalogosLE/dificultad.php'+params);
    }

    elimina(id,idActividad){
      var params = '?id_dato_pregunta='+id;
      params += '&id_actividad='+idActividad;    
      return this._httpClient.get(this.url +'learning/datosPregunta/elimina.php'+params);
    }

    orden(orden_nuevo,id_actividad,id_dato_pregunta,jwt){      
      var params = '?orden_nuevo='+orden_nuevo;
      params += '&id_dato_pregunta='+id_dato_pregunta;
      params += '&id_actividad='+id_actividad;    
      params += '&jwt='+jwt;    
      return this._httpClient.get(this.url +'learning/datosPregunta/orden.php'+params);
    }

    modificaPregunta(form,id_actividad,dato_pregunta_id,jwt){
      let formData: FormData = new FormData(); 
      let datos = [{var: 'id_dificultad', control: 'dificultad'},
        {var: 'aleatorio', control: 'aleatorio'},
        {var: 'ponderacion', control: 'ponderacion'},
        {var: 'retroalimentacion', control: 'retroalimentacion'}
      ];
      datos.forEach(dato => {
        formData.append(dato.var, form.get(dato.control)? form.get(dato.control).value : '0');
      });
      formData.append('orden', form.get('orden').value);
      formData.append('id_tipo_pregunta', form.get('tipoPregunta').value);
      formData.append('id_actividad', id_actividad);
      formData.append('retroalimentacion_docente','');
      formData.append('jwt', jwt);
  
      var fd = new FormData();
  
      if (dato_pregunta_id == null) {// INSERTA UN NUEVO REGISTRO
        return this._httpClient.post(this.url +'learning/datosPregunta/crea.php',formData);
      }else{
  
        formData.append('id_dato_pregunta', dato_pregunta_id);
        return this._httpClient.post(this.url +'learning/datosPregunta/edita.php',formData);
      }
    }

    
    modificaContenidoPregunta(form,id_dato_pregunta,id_pregunta,tipoPregunta,jwt){
 
      let formData: FormData = new FormData(); 
      console.log(form)
      formData.append('id_datos_pregunta',id_dato_pregunta);
      formData.append('id_tipo_pregunta',tipoPregunta);
      
      formData.append('pregunta', form.get('instruccion').value);
      formData.append('contenido', form.get('contenido').value);
      formData.append('jwt', jwt);

      if(tipoPregunta == '2'){
        formData.append('tipo',form.get('tipo').value);
      }

      if(tipoPregunta == '5'){
        formData.append('orientacion',form.get('orientacion').value);
      }

      if(tipoPregunta == '6'){
        formData.append('pregunta1',form.get('pregunta1').value);
        formData.append('pregunta2',form.get('pregunta2').value);
        formData.append('pregunta3',form.get('pregunta3').value);
      }

      /*if(tipoPregunta == '7'){
        formData.append('momento',form.get('momento').value);
      }*/

      if(tipoPregunta == '11'){
        formData.append('id_formato',form.get('idFormato').value);
        formData.append('num_archivos',form.get('numArchivos').value);
      }

      
      
  
      var fd = new FormData();
  
      if (id_pregunta == null) {// INSERTA UN NUEVO REGISTRO
        return this._httpClient.post(this.url +'learning/contenidoPregunta/crea.php',formData);
      }else{
  
        formData.append('id_pregunta', id_pregunta);
        return this._httpClient.post(this.url +'learning/contenidoPregunta/edita.php',formData);
      }
    }
  
    sumaPonderacion(id,jwt){

      var params = '?id_actividad='+id;
      params += '&jwt='+jwt;
      
      return this._httpClient.get(this.url +'/learning/datosPregunta/ponderacionTotal.php'+params);
    }

    consultaFormatos(jwt){
      var params = '?jwt='+jwt;  
      return this._httpClient.get(this.url +'catalogosLE/cat_formato.php'+params);
    }
  

}
