import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  
  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   eliminaCampus(id_campus,jwt){
    var params = '?id_campus='+id_campus;
    return this._httpClient.get(this.url +'admin/campus/elimina.php'+params);
  }


  eliminaCarrera(id_carrera,jwt){
    var params = '?id_carrera='+id_carrera;
    return this._httpClient.get(this.url +'admin/carrera/elimina.php'+params);
  }


   consulta(id,jwt){
    var params = '?id_carrera='+id;
    
    return this._httpClient.get(this.url +'/admin/carrera/consulta.php'+params);
  }
  
  consultaCampus(id,jwt){
    var params = '?id_campus='+id;
    return this._httpClient.get(this.url +'/admin/campus/consulta.php'+params);
  }

  consultaPlanEstudios(id,jwt){
    var params = '?id_carrera='+id;
    return this._httpClient.get(this.url +'/admin/carrera/consultaPlanEstudios.php'+params);
  }

  consultaCarreraCampus(jwt){
    return this._httpClient.get(this.url +'/admin/campus/consulta_carrera.php');
  }



  modificaCarrera(form,jwt,id, id_nivel_estudios){
 
    let formData: FormData = new FormData(); 
    formData.append('nivel_estudios_id',form.get('nivelEstudios').value); 
    formData.append('carrera_clave', form.get('claveCarrera').value);
    formData.append('carrera', form.get('nombreCarrera').value);

    if (id == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'admin/carrera/crea.php',formData);
    }else{

      formData.append('id_nivel_estudios', id_nivel_estudios);
      formData.append('id_carrera', id);
      return this._httpClient.post(this.url +'admin/carrera/edita.php',formData);
    }
  }

  modificaCampus(form,jwt,id){
    let online = form.get('online').value;
    online? online = 1: online = 0;
 
    let formData: FormData = new FormData(); 
    formData.append('clave_campus',form.get('claveCampus').value); 
    formData.append('campus', form.get('nombreCampus').value);
    formData.append('online', online);
    formData.append('id_tipo_campus', form.get('tipoCampus').value);

    if (id == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'admin/campus/crea.php',formData);
    }else{
      formData.append('id_campus', id);
      return this._httpClient.post(this.url +'admin/campus/edita.php',formData);
    }
  }
  vinculaCarreraCampus(form,jwt){
    let formData: FormData = new FormData(); 
    formData.append('campus_id',form.get('campus').value); 
    formData.append('carrera_id', form.get('carrera').value);
    
    return this._httpClient.post(this.url +'/admin/campus/crea_carrera.php',formData);
  }

  desvinculaCarreraCampus(id_carrera,id_campus,jwt){
    var params = '?id_carrera='+id_carrera;
    params += '&id_campus='+id_campus;
    
    return this._httpClient.get(this.url +'/admin/campus/elimina_carrera.php'+params);
  }

  consultaTipoCampus() {
    return this._httpClient.get(this.url +'/catalogosCE/tipoCampus.php');
  }
}
