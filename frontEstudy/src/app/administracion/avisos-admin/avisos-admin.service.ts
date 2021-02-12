import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class AvisosAdminService {
  public url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient,
  ) { 
    this.url = GLOBAL.url;
  }

  eliminaSwitchAviso(switch_aviso_id){
      var params = '?switch_aviso_id='+switch_aviso_id;    
      return this._httpClient.get(this.url +'/controlEscolar/avisosAdmin/eliminaAvisosSwitch.php'+params);
  }

  consulta(tipo){
    var params = '?tipo='+tipo;    
    return this._httpClient.get(this.url +'/controlEscolar/avisosAdmin/consulta.php'+params);
  }

  consultaAviso(id_aviso){
    var params = '?id_aviso='+id_aviso;    
    return this._httpClient.get(this.url +'/controlEscolar/avisosAdmin/consultaEspecifica.php'+params);
  }

  consultaDireccion(id_aviso){
    var params = '?aviso_id='+id_aviso;    
    return this._httpClient.get(this.url +'/controlEscolar/avisosAdmin/consultaSwitchAviso.php'+params);
  }

  modificaAvisos(aviso,id_persona,id_aviso,archivo){
 
    let formData: FormData = new FormData(); 
    formData.append('titulo', aviso.get('tituloAviso').value);
    formData.append('mensaje', aviso.get('mensaje').value);
    formData.append('fecha_inicio', aviso.get('fechaInicio').value);
    formData.append('fecha_fin', aviso.get('fechaFin').value);
    formData.append('id_administrador', id_persona);
    // formData.append('id_asignatura_grupo', idAsignaturaGrupo);
    if(archivo)
      formData.append('contenido', archivo);
    formData.append('id_importancia_aviso', aviso.get('importancia').value);
  
    var fd = new FormData();

    if (id_aviso == null) {// INSERTA UN NUEVO REGISTRO
      return this._httpClient.post(this.url +'controlEscolar/avisosAdmin/crea.php',formData);
    }else{

      formData.append('id_aviso', id_aviso);
      return this._httpClient.post(this.url +'controlEscolar/avisosAdmin/edita.php',formData);
    }
  }

  eliminaAviso(id_aviso){
    var params = '?id_aviso='+id_aviso;    
    return this._httpClient.get(this.url +'controlEscolar/avisosAdmin/elimina.php'+params);
  }

}
