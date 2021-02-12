import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   cambiaVisto(rol, id_materia,visto, cambios){
    var params = '?rol_id='+rol;
    params += '&id_materia='+id_materia;
    params += '&visto='+visto; //1 visto 0 no visto
    params += '&numero_cambios='+cambios; 
  
    return this._httpClient.get(this.url +'learning/mensaje_materia/MarcaVistoMensaje.php'+params);
   }

   consulta(materia_id,jwt,inicio,final){
    
    var params = '?id_materia='+materia_id;
    params += '&limit_inicio='+inicio;
    params += '&limit_final='+final;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/learning/mensaje_materia/consulta.php'+params);
  }

  consultaBandejaMensajes( tipo){    
    var params = '?nuevos='+tipo;
    return this._httpClient.get(this.url +'/controlEscolar/mensajeria/mensajesDocente.php'+params);
   }

   consultaBandejaMensajesAlumno( tipo){    
    var params = '?nuevos='+tipo;
    return this._httpClient.get(this.url +'/controlEscolar/mensajeria/mensajesAlumno.php'+params);
   }
   

  enviar(persona_id,materia_id,texto,origen,jwt,mensaje_id=null){

    let formData: FormData = new FormData(); 
    
    formData.append('persona_id', persona_id);
    formData.append('materia_id', materia_id);
    formData.append('texto', texto);
    formData.append('origen', origen);
    formData.append('jwt', jwt);

    if(!mensaje_id){
      return this._httpClient.post(this.url +'learning/mensaje_materia/crea.php',formData);
    }
  }

  getTotalMensajes(jwt, materia_id){
    var params = '?id_materia='+materia_id;
    params += '&jwt='+jwt;
    
    return this._httpClient.get(this.url +'/controlEscolar/notificaciones/totalMensajeriaMateria.php'+params);
  }
  
}
