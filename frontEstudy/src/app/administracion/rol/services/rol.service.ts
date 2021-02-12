import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
    ) {
      this.url = GLOBAL.url;
  }


  consultaEsp(id){
    var params = '?id_area='+id;
    return this._httpClient.get(this.url +'area/consultaEsp.php'+params);
  }


  elimina(id,jwt){
    var params = '?id_area='+id;
    return this._httpClient.get(this.url +'area/elimina.php'+params);
  }

  consultaPrivilegios(id){
    var params = '?id_area='+id;
    return this._httpClient.get(this.url +'area/consultaPrivilegiosArea.php'+params);
  }

  modificaArea(rol, id_area){
    let formData: FormData = new FormData(); 
    formData.append('area', rol.get('area').value);
    formData.append('area_desc', rol.get('desc').value);
    var fd = new FormData();
    if (id_area == null) {
      return this._httpClient.post(this.url +'area/crea.php',formData);
    }else{
      formData.append('id_area', id_area); 
      return this._httpClient.post(this.url +'area/edita.php',formData);
    }
  }

  insertaPrivilegios(id_privilegios, id_area){
 
    let formData: FormData = new FormData(); 
    id_privilegios.forEach(privilegiosId => {
      formData.append('privilegio_id[]', privilegiosId);
    });
    formData.append('area_id', id_area);

    return this._httpClient.post(this.url +'area/creaPrivilegiosArea.php',formData);
  }

  eliminarPrivilegios(id){
    var params = '?id_area='+id;
    return this._httpClient.get(this.url +'area/eliminaPrivilegiosArea.php'+ params);
}
}
