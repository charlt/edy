import { Injectable, Output, EventEmitter } from '@angular/core';
import { GLOBAL } from 'src/app/services/global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  public url: string;

  @Output() change: EventEmitter<boolean> = new EventEmitter();


  constructor(
    private _httpClient: HttpClient
    
  ){
    this.url = GLOBAL.url
  }

  cambiaAvisoEstatus(aviso_id){
    this.change.emit(aviso_id);
  }
  
  consulta(nuevos,idAsignaturaGrupo,idRol){
    var params = '?nuevos='+nuevos;
    if(idAsignaturaGrupo)
      params += '&id_asignatura_grupo='+idAsignaturaGrupo;

      if(idRol == "3"){

        return this._httpClient.get(this.url +'/controlEscolar/docente/consultaAvisos.php'+params);

      }else if(idRol == "2" || idRol == "4"){

        return this._httpClient.get(this.url +'/learning/alumno/consultaAvisos.php'+params);
                
      }
    
  }

  marcarAvisos(id_aviso,tipo,visto) {
    let formData= new FormData();
      

      if(tipo == 1){
        formData.append('id_avisos_grupo', id_aviso);
        formData.append('visto', visto);
        return this._httpClient.post(this.url + 'controlEscolar/avisosDocente/marcarVisto.php', formData);
        
      }else{
        formData.append('id_aviso', id_aviso);
        formData.append('visto', visto);
        return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/marcarVisto.php', formData);
      }
    
      
  }
}
