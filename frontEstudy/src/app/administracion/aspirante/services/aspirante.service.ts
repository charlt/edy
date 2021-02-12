import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from '../../../services/global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AspiranteService {

  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ){
    this.url = GLOBAL.url;
   }

   consultaSolicitud(jwt){
    // var params = '?jwt='+jwt;
    // params += '&id='+ id_persona;

    return this._httpClient.get(this.url +'/seguimiento/reportes/solicitud.php');
   }

   totalAspirantes(tipo, carrera_id,fecha_inicio,fecha_fin){
    var params = '?tipo='+tipo;
    params += '&carrera_id='+ carrera_id;
    if(fecha_inicio) params += '&fecha_inicio='+fecha_inicio;
    if(fecha_fin) params += '&fecha_fin='+fecha_fin;

    return this._httpClient.get(this.url +'/seguimiento/administracion/totalAspirantes.php'+params);
   }

   consultaEspecifica(id_persona ){
    var params = '?id='+ id_persona;

    return this._httpClient.get(this.url +'/seguimiento/aspirante/consultaAspirante.php'+params);
  } 

  elimina(jwt, id){
    var params = '?aspirante_id='+id;
    
    return this._httpClient.get(this.url +'/seguimiento/administracion/elimina.php'+params);
  } 

  matriculaAspirante( id,jwt){
    var params = '?id_aspirante='+id;
    
    return this._httpClient.get(this.url +'/controlEscolar/administracionAlumno/matriculaAspirante.php'+params);
  } 

  editaValidacion(id_persona,validador){
    var params = '?persona_id='+id_persona;
        params += '&validador='+validador;
    
    return this._httpClient.get(this.url +'/seguimiento/administracion/cambiaValidacionAdmin.php'+params);
  } 

  consultaAspirantes(jwt, contenido, inicio, limite, tipo, carrera_id, fecha_inicio,fecha_fin){
    var params = '?limit_final='+limite;
    if (contenido != null) {params += '&busqueda='+contenido;}
    if(carrera_id) params += '&carrera_id='+carrera_id;
    if(fecha_inicio) params += '&fecha_inicio='+fecha_inicio;
    if(fecha_fin) params += '&fecha_fin='+fecha_fin;
    params += '&limit_inicio='+inicio;
    params += '&tipo='+tipo;
    
    return this._httpClient.get(this.url +'/seguimiento/administracion/consultaAspirantes.php'+params);
  }

  consultaAlumno(){ //revisa si el aspirante es un alumno activo
    return this._httpClient.get(this.url +'/seguimiento/aspirante/consultaAlumno.php');
  }

  editaEstatusAspirante(id_aspirante, situacion_aspirante_id){
    let formData: FormData = new FormData();
    formData.append('aspirante_id', id_aspirante);
    formData.append('situacion_aspirante_id', situacion_aspirante_id);
    return this._httpClient.post(this.url +'seguimiento/aspirante/editaEstatus.php', formData);
  }

  editaCarrera(aspirante_id, carrera_id){
    var params = '?id_aspirante='+aspirante_id;
        params += '&id_carrera='+carrera_id;
    
    return this._httpClient.get(this.url +'/seguimiento/administracion/modificaCarrera.php'+params);
  }
  
  registroAspirante(jwt, id_aspirante){
    let formData: FormData = new FormData();
    formData.append('id_persona', id_aspirante);
    formData.append('clave_aspirante', id_aspirante);
    formData.append('carrera_id', '0');
    // formData.append('jwt', jwt);
    return this._httpClient.post(this.url +'learning/perfil/registroAspirante.php', formData);
  }
  
}
