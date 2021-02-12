import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FechaService } from 'src/app/services/fecha.service';
import { GLOBAL } from 'src/app/services/global';


@Injectable({
  providedIn: 'root'
})
export class MateriasExtrasService {
  public url: string;
  public urlAssets: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient,    
    private _fechaService: FechaService
    ){
    this.url = GLOBAL.url;
    this.urlAssets = GLOBAL.urlAssets;
  }

  consultaCatalogoCompraAsign(id_alumno){
    var params = '?id_alumno='+id_alumno;
    return this._httpClient.get(this.url +'learning/alumno/catalogoCompraAsignaturas.php'+params);
  }

  habilitarMateria(id_asignatura_grupo){
    let formData: FormData = new FormData();
    formData.append('id_asignatura_grupo', id_asignatura_grupo); 

    return this._httpClient.post(this.url +'learning/alumno/habilitarMateria.php',formData);
  }

  generarPago(nombre_pago, id_asignatura){
    let formData: FormData = new FormData();
    formData.append('nombre_pago', nombre_pago); 
    formData.append('id_asignatura', id_asignatura); 

    return this._httpClient.post(this.url +'pagos/materia/generarPago.php',formData);
  }
}