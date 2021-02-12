import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  public url: string;

  constructor(
    private _http: Http,
private _httpClient: HttpClient
  ) {
    this.url = GLOBAL.url;
   }

   consultaMateriasPlan(id){
    var params = '?id_plan_estudio='+id;
    
    return this._httpClient.get(this.url +'admin/planEstudios/consultaAsignatura.php'+params);
  }

   guardaContenido(contenido, id_asignatura){
    let formData: FormData = new FormData(); 
    formData.append('archivo', contenido);
    formData.append('id_asignatura', id_asignatura);
   
    return this._httpClient.post(this.url +'admin/asignaturas/editarContenido.php',formData);

   }

  eliminaContenido(contenido, id_asignatura){
    let formData: FormData = new FormData(); 
      formData.append('url_contenido', contenido);
      formData.append('id_asignatura', id_asignatura);
   
    return this._httpClient.post(this.url +'admin/asignaturas/eliminaContenido.php',formData);
   }

   consultaEspecificaAsign(jwt, id_asignatura){
    var params = '?id_asignatura='+id_asignatura;
    return this._httpClient.get(this.url +'controlEscolar/asignatura/consulta.php'+params);

   }

   excel( file,jwt){

    let formData: FormData = new FormData(); 
    formData.append('excel', file);
    formData.append('columna', '7' );
    formData.append('jwt', jwt);
   
    return this._httpClient.post(this.url +'extras/consultaexcel.php',formData);
  }

   consulta(jwt, id){
    var params = '?id_asignatura='+id;
    return this._httpClient.get(this.url +'admin/asignaturas/consulta.php'+params);
  }

  elimina(id){
    var params = '?id_asignatura='+id;
    return this._httpClient.get(this.url +'admin/asignaturas/elimina.php'+params);
  }


  consultaModulo(id,tipo,jwt){
    var params = '?id_asignatura='+id;
    params += '&tipo='+tipo;
    return this._httpClient.get(this.url +'learning/asignatura/consultaModulos.php'+params);
  }

  consultaOrden(id){
    var params = '?id_plan_estudio='+id;
    // params += '&tipo='+tipo;
    
    return this._httpClient.get(this.url +'admin/planEstudios/consultaOrdenJerarquico.php'+params);
  }
  
  
  insertaPlanOrdenAsignatura(id_plan_orden, id_asignatura,Asignatura,origen){
    let formData: FormData = new FormData();
    if(id_plan_orden){formData.append('id_plan_orden', id_plan_orden)}else {formData.append('id_plan_orden', null)}
    if(id_asignatura)formData.append('id_asignatura',id_asignatura);    

    if (Asignatura.get('planEstudio').value){formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);}else{formData.append('plan_estudio_id', null);}
    if (Asignatura.get('gradoAsignatura').value){formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);}else{formData.append('orden_jerarquico_id', null);} 
    formData.append('origen',origen);    
    
    if(origen == 1 || origen == 2){
      return this._httpClient.post(this.url +'admin/asignaturas/insertaPlanOrdenAsignatura.php',formData);
    }else if(origen == 3){
      //nuevo componente de asignatura
      return this._httpClient.post(this.url +'admin/asignaturas/clonarAsignatura.php',formData);
    }
  }


   modificaAsignatura(Asignatura, jwt,id_asignatura){ 
 
    let formData: FormData = new FormData(); 
    //formData.append('carrera', planEstudio.get('carreraAsignatura').value);
    formData.append('asignatura_clave', Asignatura.get('claveAsignatura').value);
    formData.append('asignatura', Asignatura.get('nombreAsignatura').value);
    formData.append('creditos', Asignatura.get('creditosAsignatura').value);
    formData.append('tipo_asignatura_id', Asignatura.get('tipoAsignatura').value);
    formData.append('id_asignatura_padre', Asignatura.get('asignaturaPlan').value);
    // formData.append('orden_jerarquico', Asignatura.get('gradoAsignatura').value);
    // formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
    // formData.append('orden_jerarquico', '1');

    // console.log(Asignatura.get('gradoAsignatura').value);

    if (Asignatura.get('planEstudio').value){formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);}else{formData.append('plan_estudio_id', null);}
    if (Asignatura.get('gradoAsignatura').value){formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);}else{formData.append('orden_jerarquico_id', null);}
    if (Asignatura.get('califMax').value){formData.append('calif_max', Asignatura.get('califMax').value);}else{formData.append('calif_max', null);}
    if (Asignatura.get('califMin').value){formData.append('calif_min', Asignatura.get('califMin').value);}else{formData.append('calif_min', null);}

    if (!id_asignatura) {
      return this._httpClient.post(this.url +'admin/asignaturas/crea.php',formData);
    }else{
      formData.append('id_asignatura', id_asignatura); 
      return this._httpClient.post(this.url +'admin/asignaturas/edita.php',formData);
    }
  }

  insertaEditor( idAsignatura,columna, tex, jwt){
    let formData: FormData = new FormData(); 
    formData.append('id_asignatura',idAsignatura);
    formData.append('columna',columna);
    formData.append('tex', tex);

    return this._httpClient.post(this.url +'admin/asignaturas/editaPresentacion.php',formData);
  }

  imagen(idAsignaturaSelected, imgFile,jwt){
    let formData: FormData = new FormData();
    formData.append('id_asignatura',idAsignaturaSelected);
    formData.append('imagen', imgFile); 
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'admin/asignaturas/editaImagen.php',formData);
  }

  imagenPrevia(idAsignaturaSelected, imgFile,jwt){
    let formData: FormData = new FormData();
    formData.append('id_asignatura',idAsignaturaSelected);
    formData.append('imagen', imgFile); 
    formData.append('jwt', jwt);

    return this._httpClient.post(this.url +'admin/asignaturas/editaImagenPrevia.php',formData);
  }

  consultaAsignaturas(id_docente){ 
    var params = '?id_docente='+id_docente;   
    return this._httpClient.get(this.url +'controlEscolar/docente/consultaAsignaturas.php'+params);
  }

  consultaAsignaturasTroncoComun(jwt){
    var params = '?jwt='+jwt;
    return this._httpClient.get(this.url +'catalogosCE/consultaAsignaturasTronco.php'+params);
  }

  consultaAsignaturaGrupo( id_orden_asignatura){
    var params = '?id_orden_asignatura='+id_orden_asignatura;
    return this._httpClient.get(this.url +'controlEscolar/asignatura/consultaGrupos.php'+params);
  }

  consultaAsignaturasAdminDummy(id_orden_asignatura){
    var params = '?id_orden_asignatura='+id_orden_asignatura;
    return this._httpClient.get(this.url +'controlEscolar/materia/consultaAdministradorDummy.php'+params);
  }

}
