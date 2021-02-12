import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from "src/app/services/global";
@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  url: string = GLOBAL.url;

  constructor(
    private _httpClient: HttpClient
  ) { }

  consultaFechas(id_ciclo) {
    let params =  new HttpParams()
      .set('id_ciclo', id_ciclo);
    return this._httpClient.get(this.url + 'controlEscolar/calendario/consulta.php', {params: params});
  }

  guardaEvento(form, evento_id) {    
    let formData = new FormData();
    if (evento_id) formData.append('evento_id', evento_id)
    for (var [key, value] of form) {      
      if (key != 'checkbox_fin') formData.append(key, value);
    }

    return this._httpClient.post(this.url + 'controlEscolar/calendario/creaEvento.php', formData);
  }

  consultaEventos(id_ciclo) {
    let params =  new HttpParams()
      .set('id_ciclo', id_ciclo);
    return this._httpClient.get(this.url + 'controlEscolar/calendario/consultaEventos.php', {params: params})
  }

  eliminaEvento(evento_id) {    
    let formData = new FormData();
      formData.append('evento_id', evento_id)

    return this._httpClient.post(this.url + 'controlEscolar/calendario/eliminaEvento.php', formData);
  }

  consultaCicloAlumno() {
    return this._httpClient.get(this.url + 'learning/alumno/consultaCiclosActivos.php');
  }

}
