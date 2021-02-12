import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnlaceService {
  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient){
    this.url = GLOBAL.url;
  }

  consultaAlumno(clave_alumno){
    var params = '?clave_alumno='+clave_alumno;
      return this._httpClient.get(this.url +'institutoEnlace/alumno/consulta.php'+params);
  }
  getJWT(clave_alumno){
    var params = '?clave_alumno='+clave_alumno;
      return this._httpClient.get(this.url +'institutoEnlace/auth.php'+params);
  }    
  consultaMateria(clave_alumno,idMateria){
    var params = '?clave_alumno='+clave_alumno;
    if(idMateria){
      params += '&id_materia='+idMateria;
    }

    return this._httpClient.get(this.url +'institutoEnlace/alumno/consultaMaterias.php'+params);
  }  
  
}
