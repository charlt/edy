import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadSqaService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
     }

     consulta(materia_id,jwt){

      var params = '?id_materia='+materia_id;
  
       params += '&jwt='+jwt;
      
      return this._httpClient.get(this.url +'/learning/materia/consultaActividadSQA.php'+params);
    }

    guardarCalificacion(final,materia_fecha_actividad_id,persona_id,origen,jwt){


      let formData: FormData = new FormData(); 
        
      var fd = new FormData();
    
      formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
      formData.append('persona_id', persona_id);
      formData.append('texto', final.get('nota').value);
      formData.append('origen', origen);
      formData.append('jwt', jwt);

      formData.append('calificacion', final.get('valor').value);
    
      return this._httpClient.post(this.url + 'learning/respuestaDiagnostica/guardarCalificacion.php',formData);
    
    }

}
