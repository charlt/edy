import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VinculacionIdeasService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  creaPropietario(id_datos_pregunta,id_tipo_pregunta,id_pregunta,id_persona,jwt){

    let formData: FormData = new FormData(); 

    formData.append('id_datos_pregunta', id_datos_pregunta);
    formData.append('id_tipo_pregunta', id_tipo_pregunta);
    formData.append('id_pregunta', id_pregunta);
    formData.append('id_persona', id_persona);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/propietarioPregunta/crea.php',formData);
  }

  editaConclusion(conclusion,idMateriaFechaActividad, jwt){
    let formData: FormData = new FormData(); 
    formData.append('conclusion', conclusion);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/respuestaCuadroComparativoFinales/editaConclusion.php',formData);
    
  }

  editaAspectoComun(aspecto_comun,idMateriaFechaActividad, jwt){
    let formData: FormData = new FormData(); 
    formData.append('aspecto_comun', aspecto_comun);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url + 'learning/respuestaMapaCognitivoFinales/editaAspectoComun.php',formData);
    
  }

  creaRespuesta(tipo, idPregunta, _form,idMateriaFechaActividad, jwt){
    let formData: FormData = new FormData(); 
    let form = _form.value;
    formData.append('id_pregunta', idPregunta);
    formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
    formData.append('numero_elementos', form.itemsElemento.length);
    formData.append('numero_categorias', form.itemsCategoria.length);
    formData.append('jwt', jwt);
    if (tipo == 1) {
      formData.append('cuadro_comparativo_desc', form.titulo);
      return this._httpClient.post(this.url + 'learning/respuestaCuadroComparativo/crea.php',formData);
    }else if (tipo == 2) {
      formData.append('mapa_cognitivo_desc', form.titulo);
      return this._httpClient.post(this.url + 'learning/respuestaMapaCognitivo/crea.php',formData);
    }
  }


  creaElemento(id, id_respuesta, form, jwt){
    let formData: FormData = new FormData(); 
    let itemsElemento = form.get('itemsElemento').value;    
    
    formData.append('id_respuesta', id_respuesta);
    itemsElemento.forEach(elemento => {
      formData.append('elemento_desc[]', elemento.elemento);
    });
    formData.append('jwt', jwt);
    if (id == 1) {
      return this._httpClient.post(this.url + 'learning/respuestaCuadroComparativo/cargaElemento.php',formData);
    }else if (id == 2) {
      return this._httpClient.post(this.url + 'learning/respuestaMapaCognitivo/cargaElemento.php',formData);
    }
  }

  creaCategoria(id, id_respuesta, form, jwt){
    let formData: FormData = new FormData(); 
    let itemsCategoria = form.get('itemsCategoria').value;

    formData.append('id_respuesta', id_respuesta);
    itemsCategoria.forEach(categoria => {
      formData.append('categoria_desc[]', categoria.categoria);
    });
    formData.append('jwt', jwt);

    if (id == 1) {
      return this._httpClient.post(this.url + 'learning/respuestaCuadroComparativo/cargaCategorias.php',formData);
    }else if (id == 2) {
      return this._httpClient.post(this.url + 'learning/respuestaMapaCognitivo/cargaCategorias.php',formData);
    }
  }

  consulta(tipo,id_pregunta, idMateriaFechaActividad,jwt){
    var params = "?id_pregunta=" + id_pregunta;
    params += "&id_materia_fecha_actividad=" + idMateriaFechaActividad;
    params += "&jwt=" + jwt;
    if (tipo == 1) {
      return this._httpClient.get(this.url + 'learning/respuestaCuadroComparativo/consulta.php' + params);
    }else if (tipo == 2) {
      return this._httpClient.get(this.url + 'learning/respuestaMapaCognitivo/consulta.php' + params);
    }
  }

  consultaElemento(tipo, id_respuesta, jwt){
    var params = "?id_respuesta=" + id_respuesta;
    params += "&jwt=" + jwt;
    if (tipo == 1) {
      return this._httpClient.get(this.url + 'learning/respuestaCuadroComparativo/consultaElemento.php' + params);
    }else if (tipo == 2) {
      return this._httpClient.get(this.url + 'learning/respuestaMapaCognitivo/consultaElemento.php' + params);
    }
  }

  consultaCategoria(tipo, id_respuesta, jwt){
    var params = "?id_respuesta=" + id_respuesta;
    params += "&jwt=" + jwt;

    if (tipo == 1) {
      return this._httpClient.get(this.url + 'learning/respuestaCuadroComparativo/consultaCategoria.php' + params);
    }else if (tipo == 2) {
      return this._httpClient.get(this.url + 'learning/respuestaMapaCognitivo/consultaCategoria.php' + params);
    }
  }

  enviarRespuesta( tipo, _form, jwt, idRespuestaFinal){
    let formData: FormData = new FormData();
    let form = _form[0];

    formData.append('id_elemento', form.id_elemento);
    formData.append('id_categoria', form.id_categoria);
    formData.append('respuesta', form.respuesta);
    formData.append('jwt', jwt);
    if(tipo == 1){
      if(!idRespuestaFinal){
        return this._httpClient.post(this.url + 'learning/respuestaCuadroComparativoFinales/crea.php',formData);
      }else{
        formData.append('id_respuesta_final', idRespuestaFinal);
        return this._httpClient.post(this.url + 'learning/respuestaCuadroComparativoFinales/edita.php',formData);
      }
    }else if( tipo == 2){
      if(!idRespuestaFinal){
        return this._httpClient.post(this.url + 'learning/respuestaMapaCognitivoFinales/crea.php',formData);
      }else{
        formData.append('id_respuesta_final', idRespuestaFinal);
        return this._httpClient.post(this.url + 'learning/respuestaMapaCognitivoFinales/edita.php',formData);
      }
    }
      
    
  }

  
  consultaRespuestas(tipo,idRespuesta,idMateriaFechaActividad, jwt){
    var params = "?id_materia_fecha_actividad=" + idMateriaFechaActividad;
    params += "&id_respuesta=" + idRespuesta;
    params += "&jwt=" + jwt;

    if(tipo == 1){
      return this._httpClient.get(this.url + 'learning/respuestaCuadroComparativoFinales/consulta.php' + params);

    }else if (tipo == 2){
      return this._httpClient.get(this.url + 'learning/respuestaMapaCognitivoFinales/consulta.php' + params);
    }
    
  }


  borrar(tipo,id_respuesta, idMateriaFechaActividad,jwt){
    var params = "?id_respuesta=" + id_respuesta;
    params += "&id_materia_fecha_actividad=" + idMateriaFechaActividad;
    params += "&jwt=" + jwt;

    if (tipo == 1) {
      return this._httpClient.get(this.url + 'learning/respuestaCuadroComparativoFinales/eliminaCuadroComparativo.php' + params);
    }else if (tipo == 2) {
      return this._httpClient.get(this.url + 'learning/respuestaMapaCognitivoFinales/eliminaMapaCognitivo.php' + params);
    }

  }

 
}
