import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  public url: string;


  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }
   
   consultaAspirante( id_aspirante){
    var params = '?id_aspirante=' + id_aspirante;

    return this._httpClient.get(this.url +'seguimiento/aspirante/consulta.php'+params);
  }


   insertaRegistro(signupForm, color, tipo){
    let formData: FormData = new FormData();
    formData.append('nombre', signupForm.get('nombre').value); 
    formData.append('primer_apellido', signupForm.get('primer_apellido').value); 
    formData.append('segundo_apellido', signupForm.get('segundo_apellido').value); 
    formData.append('email', signupForm.get('email').value); 
    formData.append('celular', signupForm.get('numero').value); 
    //formData.append('clave_aspirante', signupForm.get('claveElector').value);
    formData.append('carrera_id', signupForm.get('carrera').value);  
    formData.append('curp', signupForm.get('curp').value); 
    formData.append('promocion', signupForm.get('codPromo').value); 
    formData.append('color',color); 
    
    if (tipo == 0) {
      return this._httpClient.post(this.url +'seguimiento/aspirante/registro.php',formData);
    }else if (tipo == 1) {
      return this._httpClient.post(this.url +'asesor/aspirante/registro.php',formData);
    }
  }


  validaCodigo(codigo){
    var params = '?clave_promocion=' + codigo;
    // params += '&id_aspirante=' + id_aspirante;

    return this._httpClient.get(this.url +'seguimiento/promocion/consultaClave.php'+params);
  }
}
