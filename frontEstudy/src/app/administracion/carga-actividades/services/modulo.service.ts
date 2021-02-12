import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {
	url:string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
    } 
    
    
    consultaModulo(id,jwt){

      var params = '?id_modulo='+id;
      params += '&jwt='+jwt;
      
      return this._httpClient.get(this.url +'learning/modulos/consulta.php'+params);
      }

  	consultaActividad(id,preguntas,tipo){

    var params = '?id_modulo='+id;
    params += '&tipo='+tipo; //1 todas las actividades, 2 sólo ejercicios
    if(preguntas == 1){
      params += '&preguntas=1';
    }
    
    return this._httpClient.get(this.url +'learning/modulos/consultaActividades.php'+params);
    }
    
    elimina(id,jwt){
      var params = '?id_modulo='+id;
      params += '&jwt='+jwt;    
      return this._httpClient.get(this.url +'learning/modulos/elimina.php'+params);
    }
    orden(orden_nuevo,id_asignatura,id_modulo,jwt){      
      var params = '?orden_nuevo='+orden_nuevo;
      params += '&id_asignatura='+id_asignatura;    
      params += '&id_modulo='+id_modulo;          
      params += '&jwt='+jwt;    
      return this._httpClient.get(this.url +'learning/modulos/orden.php'+params);
    }
   
     modificaModulo(form,id_modulo,id_asignatura,tipoConsulta){
 
    let formData: FormData = new FormData(); 

    formData.append('modulo_nombre',form.get('nombreModulo').value);
    formData.append('modulo_numero',form.get('numeroModulo').value);
    formData.append('porcentaje',form.get('porcentaje').value);
    formData.append('id_asignatura',id_asignatura);
    formData.append('tipo_consulta',tipoConsulta);
    if(form.get('promedio_modulo').value){
      formData.append('promedio_modulo','1');
    }else{
      formData.append('promedio_modulo','0');
    }
    
    
    
    
    var fd = new FormData();

    if (id_modulo == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'learning/modulos/creaModuloAsignatura.php',formData);
    }else{

      formData.append('id_modulo', id_modulo);
      return this._httpClient.post(this.url +'learning/modulos/edita.php',formData);
    }
  }

}
