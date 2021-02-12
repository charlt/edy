import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url

   }

  modificaPersona(persona,id_persona, id_sexo, fechaN,jwt){
    let formData: FormData = new FormData();     
    formData.append('nombre', persona.get('nombreUsuario').value); 
    formData.append('primer_apellido', persona.get('apPatUsuario').value);
    formData.append('segundo_apellido', persona.get('apMatUsuario').value);
    formData.append('id_sexo', id_sexo)
    formData.append('email', persona.get('correoUsuario').value);
    formData.append('celular', persona.get('celUsuario').value);
    formData.append('id_persona', id_persona);
    
    if(persona.get('rfcUsuario').value) formData.append('rfc', persona.get('rfcUsuario').value);
    else  formData.append('rfc', "");

    if(persona.get('curpUsuario').value) formData.append('curp', persona.get('curpUsuario').value);
    else formData.append('curp', "");

    // fechaN = new Date(fechaN);
    // persona.get('fnUsuario').value = new Date(persona.get('fnUsuario').value)
    console.log(fechaN);
    console.log(persona.get('fnUsuario').value);
    

    // if(fechaN == 'undefined-undefined-undefined' && persona.get('fnUsuario').value != 'undefined-undefined-undefined'){
    //   formData.append('fecha_nacimiento', persona.get('fnUsuario').value);
    // }else 
    
    if(fechaN != 'undefined-undefined-undefined' && persona.get('fnUsuario').value == 'undefined-undefined-undefined'){
      formData.append('fecha_nacimiento', fechaN);
    }else if(fechaN == 'undefined-undefined-undefined' && persona.get('fnUsuario').value == 'undefined-undefined-undefined'){
      formData.append('fecha_nacimiento', null);
    }else{
      formData.append('fecha_nacimiento', persona.get('fnUsuario').value);
    }
    console.log();
    
    
    return this._httpClient.post(this.url +'admin/personas/edita.php',formData);
    
  }
}
