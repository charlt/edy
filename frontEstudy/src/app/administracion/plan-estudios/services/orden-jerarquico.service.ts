import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdenJerarquicoService {

  jwt: string;
  id: string;
  url: string;
  
  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consultaOrdenJerarquico(id,jwt){

    var params = '?jwt='+jwt;
    params += '&id_orden_jerarquico='+id;
    
    return this._httpClient.get(this.url +'/admin/ordenJerarquico/consulta.php'+params);
  }

  
  consultaCatOrdenJerarquico(jwt){

    var params = '?jwt='+jwt;    
    return this._httpClient.get(this.url +'/catalogos/ordenJerarquico.php'+params);
  }
  agregaOrdenJerarquico(idPlanEstudios,jwt){
 
    let formData: FormData = new FormData(); 
    formData.append('id_plan_estudios',idPlanEstudios); 
    formData.append('jwt', jwt);
    
    var fd = new FormData();

    return this._httpClient.post(this.url +'admin/planEstudios/agregaOrdenJerarquico.php',formData);
  }

  elimina(id){
    
    let params = '?id_plan_orden='+id;
    
    return this._httpClient.get(this.url +'/admin/ordenJerarquico/eliminaPlanOrden.php'+params);
  }
  
  vinculaOrdenPlanAsignatura(id_plan_orden,id_asignatura,jwt){

    let formData: FormData = new FormData(); 
    formData.append('id_orden_jerarquico',id_plan_orden); 
    formData.append('id_asignatura',id_asignatura);

    formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'admin/ordenJerarquico/creaPlanAsignatura.php',formData);
  }

  
  consultaAsignatura(id,jwt){

    var params = '?jwt='+jwt;
    params += '&id_plan_orden='+id;
    
    return this._httpClient.get(this.url +'/admin/ordenJerarquico/consultaAsignaturas.php'+params);
  }
    
  consultaAlumnosSinGrupo(id,jwt){

    var params = '?jwt='+jwt;
    params += '&id_plan_orden='+id;
    
    return this._httpClient.get(this.url +'/controlEscolar/ordenJerarquico/consultaAlumnosSinGrupo.php'+params);
  }

    
  eliminaAsignatura(id){
    var params = '?id_orden_asignatura='+id;
    return this._httpClient.get(this.url +'admin/ordenJerarquico/eliminaAsignatura.php'+params);
  }
}
