import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { GLOBAL } from "src/app/services/global";

@Injectable({
  providedIn: 'root'
})
export class CargaVideosService {

  url: string = GLOBAL.url;
  nuevaUrl = new EventEmitter<any>();

  constructor(
    private _httpClient: HttpClient
  ) { }

  consultaVideo(id_videoconferencia) {
    let params = new HttpParams()
      .set('id_videoconferencia', id_videoconferencia)
    return this._httpClient.get(this.url + 'extras/dropbox/consulta.php', {params: params});
  }

  guardaDropbox(form, reemplazar_video) {
    let formData = new FormData();
      // formData.append('nombre', form.nombre_archivo);
      formData.append('asignatura_grupo_id', form.asignatura_grupo);
      formData.append('videoconferencia_id', form.id_videoconferencia);
      formData.append('fecha', form.fecha);
      formData.append('reemplazar_video', reemplazar_video);
      formData.append('file', form.archivo);
    return this._httpClient.post(this.url + 'extras/dropbox/upload.php', formData);
  }

}
