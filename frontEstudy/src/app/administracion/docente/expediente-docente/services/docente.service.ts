import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  url = GLOBAL.url;

  constructor(
    private _httpClient: HttpClient
  ) { }

  registroDocente(id_aspirante){
    let formData: FormData = new FormData();
    formData.append('id_persona', id_aspirante);
    formData.append('clave_aspirante', id_aspirante);
    formData.append('carrera_id', '0');
    return this._httpClient.post(this.url +'learning/perfil/registroAspirante.php', formData);
  }
}
