import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL }  from '../../services/global';

@Injectable({
  providedIn: 'root'
})
export class GraficasPersonaService {

  public url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  consultaAccesosMes(id_persona, mes, anio){
    let params = new HttpParams()
      .set('id_persona', id_persona)
      .set('mes', mes)
      .set('', anio);

    return this.httpClient.get(this.url +'general/usuario/consultaAccesosMes.php', {params:params});
  }

}
