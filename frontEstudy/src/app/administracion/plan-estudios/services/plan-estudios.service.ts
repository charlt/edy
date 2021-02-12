import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanEstudiosService {
  
  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consulta(jwt){

    var params = '?jwt='+jwt;
    
    return this._httpClient.get(this.url +'/admin/planEstudios/consulta.php'+params);
  }
  consultaEspecifica(id,jwt){
    var params = '?id_plan_estudios='+id;
     params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/admin/planEstudios/consulta.php'+params);
  }

     elimina(id,jwt){
    var params = '?id_plan_estudios='+id;
     params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'admin/planEstudios/elimina.php'+params);
  }

  
  consultaOrdenJerarquico(id,jwt){

    var params = '?jwt='+jwt;
    params += '&id_plan_estudio='+id;
    
    return this._httpClient.get(this.url +'/admin/planEstudios/consultaOrdenJerarquico.php'+params);
  }


  modificaPlanEstudios(planEstudio,id_plan_estudios){
 
    let formData: FormData = new FormData(); 
    console.log(planEstudio)
    formData.append('plan_estudio_clave',planEstudio.get('clavePlan').value); 
    formData.append('plan_estudio', planEstudio.get('nombrePlan').value);
    formData.append('no_rvoe', '0');
    formData.append('rvoe', planEstudio.get('RVOE').value);
    formData.append('grado', planEstudio.get('periodosEstudios').value);
    formData.append('minima_creditos', planEstudio.get('minCredits').value);
    formData.append('total_creditos', planEstudio.get('totalCredits').value);
    formData.append('total_periodos', planEstudio.get('periodosEstudios').value);
    formData.append('minima_aprobatoria', planEstudio.get('cMin').value);
    formData.append('tipo_periodo_id', planEstudio.get('catPeriodos').value);
    formData.append('id_carrera', planEstudio.get('catCarreras').value);
    formData.append('tipo_plan_estudio_id', planEstudio.get('catTipoPlan').value);
    formData.append('curp_responsable', planEstudio.get('CURP').value);
    formData.append('minimo_materias_grado', planEstudio.get('minimoMateriasGrado').value);
    
    
    var fd = new FormData();

    if (id_plan_estudios == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'admin/planEstudios/crea.php',formData);
    }else{

      formData.append('id_plan_estudios', id_plan_estudios);
      return this._httpClient.post(this.url +'admin/planEstudios/edita.php',formData);
    }
  }
  
}
