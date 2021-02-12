import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  public url: string;


  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consultaNotas(materia_id,docente_id){

    var params = '?id_materia='+materia_id;
    params += '&id_docente='+docente_id;
    
    return this._httpClient.get(this.url +'/learning/notas/consulta.php'+params);
  }

   enviar(actividad_id,materia_id,docente_id,texto,nota_id=null){

    let formData: FormData = new FormData(); 
    if(actividad_id){
      formData.append('actividad_id', actividad_id);
    }    
    
    formData.append('materia_id', materia_id);
    formData.append('docente_id', docente_id);
    formData.append('texto', texto);

    if(!nota_id){
      return this._httpClient.post(this.url +'learning/notas/crea.php',formData);
    }
  }

  elimina(id,jwt){
    var params = '?id_nota='+id;
    params += '&jwt='+jwt;    
    return this._httpClient.get(this.url +'learning/notas/elimina.php'+params);
  }

  consultaNotasMateria(materia_id,docente_id,jwt){

    var params = '?id_materia='+materia_id;
    params += '&id_docente='+docente_id;

     params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/notas/notasMateria.php'+params);
  }
  
}
