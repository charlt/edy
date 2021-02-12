import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UmoService {

  public url: string;
  public jwt: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) 
  {
    this.url = GLOBAL.url;
  }

  consultaDia(id_grupo, id_materia, id_profesor, fecha, jwt){
    console.log(fecha)
    var params = '?id_grupo=' + id_grupo;
    params += '&id_materia=' + id_materia;
    params += '&id_profesor=' + id_profesor;
    params += '&fecha=' + fecha;
    params += '&jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/UniversidadMetropolitana/asistencia/consultaDIa.php' + params);
  }    

  consultaGrupo(id_grupo, id_materia, jwt){
    var params = '?id_grupo=' + id_grupo;
    params += '&id_materia=' + id_materia;
    params += '&jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/UniversidadMetropolitana/asistencia/consulta.php' + params);
  }   

  creaGrupo(id_grupo, id_materia, id_profesor, fecha, jwt){
    
    let formData: FormData = new FormData(); 
    formData.append('id_grupo', id_grupo); 
    formData.append('id_materia', id_materia);
    formData.append('id_profesor', id_profesor);
    formData.append('fecha', fecha);
    formData.append('jwt', jwt);
    
    return this._httpClient.post(this.url +'/UniversidadMetropolitana/asistencia/creaGrupo.php', formData);
  }

  cambiaAsistencia(tipo_asistencia, asistencia, id, jwt){
    var params = '?tipo_asistencia=' + tipo_asistencia;
    params += '&asistencia=' + asistencia;
    params += '&id_asistencia=' + id;
    params += '&jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/UniversidadMetropolitana/asistencia/cambiaAsistencia.php' + params);
  }    

  confirmaGrupo(id_grupo, id_materia, fecha, jwt){
    var params = '?id_grupo=' + id_grupo;
    params += '&id_materia=' + id_materia;
    params += '&fecha=' + fecha;
    params += '&jwt=' + jwt;
    
    return this._httpClient.get(this.url +'/UniversidadMetropolitana/asistencia/confirmaGrupo.php' + params);
  } 

}