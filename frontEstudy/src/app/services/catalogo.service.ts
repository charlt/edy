import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { GLOBAL }  from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  public url: string;
  public jwt:string;

  constructor(
    private _http: Http,
    private _httpClient: HttpClient
    ){
    this.url = GLOBAL.url;
  }

  consultaEstatusMateria(){
  return this._httpClient.get(this.url +'catalogosLE/estatusMateria.php');
}
  consultaArea(){
    // var params = '?id_plan_estudio='+idPlan
        // params += '&id_plan_estudio='+idPlan;

    return this._httpClient.get(this.url +'catalogosCE/consultaArea.php');
  }

  consultaGrado( idPlan){
    var params = '?id_plan_estudio='+idPlan;

    return this._httpClient.get(this.url +'admin/planEstudios/consultaOrdenJerarquico.php'+params);
  }

  consultaCampus(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?filtro=1'
        // params += '&filtro=1';

    return this._httpClient.get(this.url +'catalogos/campus.php'+params);
  }

  consultaInstitucion(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?filtro=1'
        // params += '&filtro=1';

    return this._httpClient.get(this.url +'catalogos/instituciones.php'+params);
  }

  consultaTipoInst(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?jwt='+jwt
        params += '&filtro=1';

    return this._httpClient.get(this.url +'catalogos/tipo_instituciones.php'+params);
  }

  consultaCarrera(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?jwt='+jwt
        params += '&filtro=1';

    return this._httpClient.get(this.url +'catalogos/carreras.php'+params);
  }

  consultaCarreraAspirantes(){
    return this._httpClient.get(this.url +'catalogos/carrerasAspirante.php');
  }

  consultatipoPeriodo(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/

    var params = '?jwt='+jwt
        params += '&filtro=1';
    
    return this._httpClient.get(this.url +'catalogos/tipoPeriodo.php'+params);
  }

  consultaNivelEstudios(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?jwt='+jwt

    return this._httpClient.get(this.url +'catalogos/nivelestudios.php'+params);
  }
  consultaEstatusAspirante(){
    return this._httpClient.get(this.url +'catalogoSG/estatusAspirante.php');
  }

  consultaEstatusCiclo(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?jwt='+jwt

    return this._httpClient.get(this.url +'catalogosCE/ciclo_estatus.php'+params);
  }
  consultaCiclo(){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    // var params = '?jwt='+jwt

    return this._httpClient.get(this.url +'catalogosCE/ciclo.php');
  }

  consultaGrupo(jwt){
    var params = '?jwt='+jwt;

    return this._httpClient.get(this.url +'catalogosCE/grupo.php'+params);
  } 

  // consultaGruposPrimero(){
  //   return this._httpClient.get(this.url +'controlEscolar/ordenJerarquico/gruposPrimero.php');
  // }
  // // controlEscolar\ordenJerarquico\gruposPrimero.php

  consultatipoAsignatura(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?jwt='+jwt
        params += '&filtro=1';

    return this._httpClient.get(this.url +'catalogos/tipoAsignatura.php'+params);
  }
  consultaRol(jwt){
    var params = '?jwt='+jwt

    return this._httpClient.get(this.url +'catalogos/rol.php'+params);
  }
  consultaPlanEstudios(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?jwt='+jwt
        params += '&filtro=1';

    return this._httpClient.get(this.url +'catalogos/planEstudios.php'+params);
  }  
  consultatipoPlanEstudios(jwt){
    /*if(token != null){
      console.log(token);
      user.gettoken = token;
    }*/
    var params = '?jwt='+jwt;
    
    return this._httpClient.get(this.url +'catalogos/tipoPlanEstudios.php'+params);
  }  
  
  consultaAsignaturaTabla(jwt){
    var params = '?jwt='+jwt
    return this._httpClient.get(this.url +'catalogos/asignaturas.php'+params);
  }  
 
  consultaUsuario(jwt,limite){
    var params = '?jwt='+jwt;
    params += '&limite='+limite;

    return this._httpClient.get(this.url +'catalogos/usuario.php'+params);
  }   
  consultaCorreo(jwt){
    var params = '?jwt='+jwt
    return this._httpClient.get(this.url +'catalogos/correos.php'+params);
  }
  
  consultaRolTabla(jwt){
    var params = '?jwt='+jwt
    return this._httpClient.get(this.url +'catalogos/rol.php'+params);
  }

  consultaListaCorreo(jwt){
    var params = '?jwt='+jwt
    return this._httpClient.get(this.url +'catalogos/grupoCorreo.php'+params);
  }
  
  consultaPrivilegios(jwt, muestraEstatus){
    var params = '?jwt='+jwt
    params += '&muestra_estatus='+ muestraEstatus
    return this._httpClient.get(this.url +'catalogos/privilegios.php'+params);
  }
  
}
