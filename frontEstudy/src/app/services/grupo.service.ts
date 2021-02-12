import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  public url: string;
  selectedGrupo;
  


  constructor(
    private _http: Http,
private _httpClient: HttpClient){
    this.url = GLOBAL.url;
  }

  
  getSelectedGrupo(){
    let selectedGrupo = JSON.parse(localStorage.getItem('selectedGrupo'))
    if(selectedGrupo !== undefined){
      this.selectedGrupo = selectedGrupo;
    }else{
      this.selectedGrupo = null;
    }

    return this.selectedGrupo;
  }

  
}
