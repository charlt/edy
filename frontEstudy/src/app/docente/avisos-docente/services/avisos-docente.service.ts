import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvisosDocenteService {
  url;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

   consultaPrioridad(jwt){
    var params = '?jwt='+jwt;  
    return this._httpClient.get(this.url +'catalogosCE/importanciaAviso.php'+params);
   }

   consulta(jwt, id_asignatura_grupo, id_docente){
    var params = '?jwt='+jwt;
    params += '&id_asignatura_grupo='+id_asignatura_grupo;    
    params += '&id_docente='+id_docente;    
    return this._httpClient.get(this.url +'controlEscolar/asignaturaGrupo/avisosDocente.php'+params);
  }

  modificaAvisos(aviso,jwt,id_docente,idAsignaturaGrupo, id_aviso, archivo){
 
    let formData: FormData = new FormData(); 
    formData.append('titulo', aviso.get('tituloAviso').value);
    formData.append('mensaje', aviso.get('mensaje').value);
    formData.append('fecha_inicio', aviso.get('fechaInicio').value);
    formData.append('fecha_fin', aviso.get('fechaFin').value);
    formData.append('id_docente', id_docente);
    formData.append('id_asignatura_grupo', idAsignaturaGrupo);
    if(archivo)
      formData.append('contenido', archivo);
    formData.append('id_importancia_aviso', aviso.get('importancia').value);
    formData.append('jwt', jwt);
  
    var fd = new FormData();

    if (id_aviso == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'controlEscolar/avisosDocente/crea.php',formData);
    }else{

      formData.append('id_aviso', id_aviso);
      return this._httpClient.post(this.url +'controlEscolar/avisosDocente/edita.php',formData);
    }
  }

  eliminaAviso(jwt, idAviso){
    var params = '?jwt='+jwt;
    params += '&id_aviso='+idAviso;       
    return this._httpClient.get(this.url +'controlEscolar/avisosDocente/elimina.php'+params);

  }

  consultaAviso(jwt, idAviso){
    var params = '?jwt='+jwt;
    params += '&id_avisos='+idAviso;       
    return this._httpClient.get(this.url +'controlEscolar/avisosDocente/consulta.php'+params);
  }
}
