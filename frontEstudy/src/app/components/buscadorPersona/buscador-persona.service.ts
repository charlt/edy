import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscadorPersonaService {
  public url: string;
  public jwt:string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

   busqueda(contenido,tipoForm,idRol){
    var params = '?busqueda='+contenido;
    params += '&id_rol='+idRol;
    params += '&tipo_form='+tipoForm;
    params += '&tipo_busqueda=' + tipoForm;
    params += '&min=0';
    params += '&max=6';

    if(idRol == 2){
      return this._httpClient.get(this.url +'controlEscolar/alumno/busqueda_alumno.php'+params);
    } else if(idRol == 3){
      return this._httpClient.get(this.url +'controlEscolar/docente/busqueda_docente.php'+params);
    } else if(idRol == 4){
      params += '&limit_inicio=0';
      params += '&limit_final=6';
      params += '&tipo=1';

      return this._httpClient.get(this.url +'seguimiento/administracion/consultaAspirantes.php'+params);
    } else if(idRol == 5){
      return this._httpClient.get(this.url +'seguimiento/asesor/busqueda.php'+params);
    }
  }

}
