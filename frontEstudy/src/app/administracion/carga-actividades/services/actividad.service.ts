import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

	url:string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
    }

    vistaArchivo(id_actividad, visto, jwt){
      let formData: FormData = new FormData(); 
      
      formData.append('id_contenido_actividad', id_actividad);
      formData.append('visto', visto);
      formData.append('jwt', jwt);

      
      return this._httpClient.post(this.url +'learning/contenidoActividad/modificaContenido.php',formData);

    }

    consultaActividad(id_actividad,jwt){

      var params =  '?jwt='+jwt;
      params += '&id_actividad='+id_actividad;
      
      return this._httpClient.get(this.url +'learning/actividad/consulta.php'+params);
    }
    
  	consultaTipoActividad(){

      return this._httpClient.get(this.url +'catalogosLE/tipoActividad.php');
    }
    consultaImportanciaActividad(){

      return this._httpClient.get(this.url +'catalogosLE/importanciaActividad.php');
    }
    consultaDificultad(jwt){

      var params =  '?jwt='+jwt;
      
      return this._httpClient.get(this.url +'catalogosLE/dificultad.php'+params);
    }

    consultaResolucion(jwt){

      var params =  '?jwt='+jwt;
      
      return this._httpClient.get(this.url +'catalogosLE/resolucion.php'+params);
    }

    elimina(id,jwt){
      var params = '?id_actividad='+id;
      params += '&jwt='+jwt;    
      return this._httpClient.get(this.url +'learning/actividad/elimina.php'+params);
    }
    consultaContenido(id,jwt){
      var params = '?id_actividad='+id;
      params += '&jwt='+jwt;    
      return this._httpClient.get(this.url +'learning/contenidoActividad/consulta.php'+params);
    }

    guardaContenido(form,id,jwt, id_modulo){

      let formData: FormData = new FormData(); 
      if (id) {
        formData.append('id_actividad', id);
      }
      formData.append('jwt', jwt);
      formData.append('archivo',form.get('contenido').value)
      formData.append('id_modulo', id_modulo)

        
      return this._httpClient.post(this.url +'learning/contenidoActividad/crea.php',formData);

    }
    eliminaContenido(id,jwt){

      var params = '?id_contenido_actividad='+id;
      params += '&jwt='+jwt;    

      return this._httpClient.get(this.url +'learning/contenidoActividad/elimina.php'+params);
    }

    orden(orden_nuevo,id_modulo,id_actividad,jwt){      
      var params = '?orden_nuevo='+orden_nuevo;
      params += '&id_actividad='+id_actividad;    
      params += '&id_modulo='+id_modulo;          
      params += '&jwt='+jwt;    
      return this._httpClient.get(this.url +'learning/actividad/orden.php'+params);
    }

    modificaActividad(form,id_modulo,id_actividad,jwt,f_inicio,f_fin){
 
      let formData: FormData = new FormData(); 
      let datos = [{ var: 'tipo_calificacion', control: 'tipoEvaluacion' }, 
        { var: 'numero_mostrado', control: 'bullet' }, 
        { var: 'shuffle', control: 'aleatorio' },
        { var: 'num_intentos', control: 'numeroIntentos' }, 
        { var: 'metodo_resolver_id', control: 'resolucion' },
        { var: 'importancia_actividad_id', control: 'importancia' },
        { var: 'ponderacion', control: 'ponderacion' }, 
        { var: 'unica', control: 'unica' },
        { var: 'portafolio', control: 'portafolio' }];
      datos.forEach(dato => {
        formData.append(dato.var, form.get(dato.control)? form.get(dato.control).value : 0);
      });
      formData.append('actividad_clave', form.get('claveActividad').value);
      formData.append('dificultad_id', form.get('dificultad')? form.get('dificultad').value : 0);
      formData.append('instruccion', form.get('instruccion').value);
      formData.append('actividad_nombre', form.get('nombreActividad').value);
      formData.append('tipo_actividad_id', form.get('tipoActividad').value);
      formData.append('fecha_inicio', f_inicio);
      formData.append('fecha_fin', f_fin);
      formData.append('modulo_id', id_modulo);
      formData.append('id_rubrica', form.get('idRubrica').value);
      formData.append('zona_horaria', form.get('zonaHoraria').value);

      if (form.get('totalPreguntas')) {
        formData.append('num_total_preguntas', form.get('totalPreguntas').value == true? form.get('numeroPreguntas').value : '0');
      }else {
        formData.append('num_total_preguntas', '0');
      }
      formData.append('num_preguntas_mostrar', "0");
      formData.append('jwt', jwt);
      
  
      var fd = new FormData();
  
      if (id_actividad == null) {// INSERTA UN NUEVO REGISTRO
        return this._httpClient.post(this.url +'learning/actividad/crea.php',formData);
      }else{
  
        formData.append('id_actividad', id_actividad);
        return this._httpClient.post(this.url +'learning/actividad/edita.php',formData);
      }
    }
  
      
    consultaPreguntas(id, jwt, tipo = 0){

      var params = '?id_actividad='+id;
      params += '&jwt='+jwt;
      params += '&tipo='+tipo; 
      
      return this._httpClient.get(this.url +'/learning/actividad/consultaPreguntas.php'+params);
    }

    sumaPonderacion(id){

      var params = '?id_asignatura='+id;
      
      return this._httpClient.get(this.url +'/learning/asignatura/ponderacionTotal.php'+params);
    }

    consultaActividadesSQA(id,jwt){

      var params = '?id_asignatura='+id;
      params += '&jwt='+jwt;
      
      return this._httpClient.get(this.url +'/learning/asignatura/consultaActividadSQA.php'+params);
    }

    reasignaCalificacionActividad(id_actividad, tipo_calificacion) {
      let formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('tipo_calificacion', tipo_calificacion);
      return this._httpClient.post(this.url +'/learning/administracion/reasignaCalificacionActividad.php', formData);
    }

    eliminaImagen(url) {
      let params = new HttpParams()
        .set('url', url);
      return this._httpClient.get(this.url + '/extras/archivo/elimina_ckeditor.php', {params: params});
    }

    consultaActividadesCompletas(id_asignatura) {
      let params = new HttpParams()
        .set('id_asignatura', id_asignatura);
      return this._httpClient.get(this.url + '/controlEscolar/asignatura/consultaActividadesCompletas.php', {params: params});
    }

    cambiaVisto(id_actividad, visto) {
      var params = '?id_actividad='+id_actividad;
      params += '&visible='+visto;
      return this._httpClient.get(this.url + '/learning/actividad/editaVisible.php'+params);
    }

    cambiarModulo(id_actividad,orden,id_modulo,id_modulo_nuevo){
      let formData = new FormData();
      formData.append('id_actividad', id_actividad);
      formData.append('orden', orden);
      formData.append('id_modulo', id_modulo);
      formData.append('id_modulo_nuevo', id_modulo_nuevo);
    return this._httpClient.post(this.url +'/learning/actividad/moverModulo.php', formData);

    }
}
