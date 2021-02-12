import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { GLOBAL } from 'src/app/services/global';


@Injectable({
  providedIn: 'root'
})
export class MatriculacionServiceService {

  public url: string;
  constructor(
    private _http: Http,
    private _httpClient: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }


  agregaAlumno(id_aspirante, formMatricula) {

    let formData: FormData = new FormData();
    formData.append('id_alumno', id_aspirante);
    formData.append('id_grupo', formMatricula.get('grupo').value);
    formData.append('id_campus', formMatricula.get('selectCampus').value);

    var fd = new FormData();
      return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaAlumno.php', formData);

  }

  guardaMatriculacion(id_aspirante, formMatricula){
    var params = '?id_aspirante='+id_aspirante;
    if (formMatricula.get('selectCampus').value) {
      params += '&id_campus='+ formMatricula.get('selectCampus').value;
    }

    if (formMatricula.get('matricula').value) {
      params += '&matricula='+ formMatricula.get('matricula').value;
    }else{
      params += '&matricula=';
    }

    return this._httpClient.get(this.url +'controlEscolar/administracionAlumno/matriculaAspirante.php'+params);
  }
}
