import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class AccesosPlataformaService {

  public url: string = GLOBAL.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  consultaAccesos(inicio, fin, rol, tipo) {
    let params: HttpParams = new HttpParams()
      .set('fecha_inicio', inicio).set('fecha_fin', fin).set('rol', rol).set('tipo', tipo);
      
    return this.httpClient.get(this.url + 'admin/graficas/consulta.php', { params: params })
  }
}
