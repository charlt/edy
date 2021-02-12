import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoPersonaService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url

  }
  
  consultaPersona(id_persona, id_rol){
    var params = '?id_persona='+id_persona;
        params += '&id_rol='+id_rol;
    
    return this._httpClient.get(this.url +'/admin/personas/consulta.php'+params);
   
  }

  modificaPersona(persona,id_persona, id_sexo, fechaN,jwt){
    let formData: FormData = new FormData();     
    formData.append('nombre', persona.get('nombreUsuario').value); 
    formData.append('primer_apellido', persona.get('apPatUsuario').value);
    formData.append('segundo_apellido', persona.get('apMatUsuario').value);
    formData.append('id_sexo', id_sexo)
    formData.append('curp', persona.get('curpUsuario').value);
    formData.append('rfc', persona.get('rfcUsuario').value);
    formData.append('email', persona.get('correoUsuario').value);
    formData.append('celular', persona.get('celUsuario').value);
    formData.append('id_persona', id_persona);
    
    //formData.append('clave_elector', persona.get('claveElector').value);
    formData.append('jwt', jwt);

    if(fechaN == null){
      formData.append('fecha_nacimiento', persona.get('fnUsuario').value);
    }else{
      formData.append('fecha_nacimiento', fechaN);
    }
  
    return this._httpClient.post(this.url +'admin/personas/edita.php',formData);
    
  }
}
