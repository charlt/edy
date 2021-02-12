import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from './global';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  public url: string;
  selectedGrupo;
  privilegiosAlumno;
  situacionAlumno;
  situacionPago;
  
  public infoPlataformaCargada: EventEmitter<any> = new EventEmitter();



  constructor(
    private _httpClient: HttpClient){
    this.url = GLOBAL.url;
  }

  consultaPlataforma() {
    return this._httpClient.get(this.url +'general/alumno/consultaPlataforma.php');
  }


  getprivilegiosAlumno(){
    let privilegiosAlumno = JSON.parse(localStorage.getItem('privilegiosAlumno'))
    if(privilegiosAlumno !== 'null' && privilegiosAlumno !== undefined){
      this.privilegiosAlumno = privilegiosAlumno;
    }else{
      this.privilegiosAlumno = null;
    }

    return this.privilegiosAlumno;
  }

  getSituacionAlumno(){
    let situacionAlumno = JSON.parse(localStorage.getItem('situacionAlumno'))
    if(situacionAlumno !== 'null' && situacionAlumno !== undefined){
      this.situacionAlumno = situacionAlumno;
    }else{
      this.situacionAlumno = null;
    }

    return this.situacionAlumno;
  }

  
  getSituacionPago(){
    let situacionPago = JSON.parse(localStorage.getItem('situacionPago'))
    if(situacionPago !== 'null' && situacionPago !== undefined){
      this.situacionPago = situacionPago;
    }else{
      this.situacionPago = null;
    }

    return this.situacionPago;
  }


  seleccionaPlan(idSuscripcion) {

    let formData: FormData = new FormData();

    formData.append('id_suscripcion', idSuscripcion);


    return this._httpClient.post(this.url +'pagos/alumno/seleccionaPlan.php',formData);
  }
}
