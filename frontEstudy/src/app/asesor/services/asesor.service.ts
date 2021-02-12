import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  url: string = GLOBAL.url;

  constructor(
    private _httpClient: HttpClient
  ) { }

  consultaAspirantes() {
    return this._httpClient.get(this.url + 'asesor/aspirante/consultaAspirante.php');
  }

  editaEstatusAspirante(id_aspirante, situacion_aspirante_id){
    let formData: FormData = new FormData();
    formData.append('aspirante_id', id_aspirante);
    formData.append('situacion_aspirante_id', situacion_aspirante_id);
    return this._httpClient.post(this.url +'seguimiento/aspirante/editaEstatus.php', formData);
  }

  editaCarrera(aspirante_id, carrera_id){
    var params = '?id_aspirante='+aspirante_id;
        params += '&id_carrera='+carrera_id;
    
    return this._httpClient.get(this.url +'/seguimiento/administracion/modificaCarrera.php'+params);
  }

  
  eliminaAspirante( id){
    var params = '?aspirante_id='+id;
    
    return this._httpClient.get(this.url +'/seguimiento/administracion/elimina.php'+params);
  }

  consultaAlumnos() {
    return this._httpClient.get(this.url + 'asesor/alumno/consultaAlumno.php');
  }

  consultaPrivilegiosAsesor() {
    return this._httpClient.get(this.url + 'general/asesor/consultaPrivilegios.php');
  }

}
