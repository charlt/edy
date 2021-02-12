import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GLOBAL } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class VideosVideoconferenciaService {

  public url: string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
    ){
    this.url = GLOBAL.url;
  }

  consultaVideoconferencias(asignatura_grupo_id){
    var params = '?asignatura_grupo_id='+asignatura_grupo_id;
    // params += '&activas='+tipo;

    return this._httpClient.get(this.url + 'learning/videoconferencia/consultaVideosVIdeoconferencias.php'+params);
  }
}
