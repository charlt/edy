import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { GLOBAL }  from './global';
import { map } from 'rxjs/operators';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

@Injectable({
  providedIn: 'root'
})
export class FechaService {
  public url: string;
  selectedGrupo;
  


  constructor(
    private _http: Http,
private _httpClient: HttpClient){
    this.url = GLOBAL.url;
  }

  
  validaVigencia(fecha_inicio, fecha_fin,tipo = 1){//tipo = 1 date tipo 2 = datetime

    let estado,activo;


    if (fecha_inicio != null && fecha_fin != null){

      let inicio = new Date(fecha_inicio*1000);
      let fin = new Date(fecha_fin*1000);
      let hoy = new Date();
    
      if (hoy >= inicio && hoy <= fin){
        estado = 1;
        activo = true;
      }else 
      if (hoy < inicio) {
        estado = 2;
        activo = false;
      }else if (hoy > fin) {
        estado = 3;
        activo = false;
      }

      
    }else{
      activo = true;
      estado = 0;
      
    }
    return [activo,estado];
  }

  formatoFecha(date, time, tipo) { //tipo 0 = ambos, tipo 1 = date, tipo 2 = datetime
    //Solo fecha: (date, '', 1);
    //Solo hora: ('', time, 2)  
    if (tipo == 0 || tipo == 1) {
      var mes = date.month;
      var dia = date.day;
      if (mes < 10) mes = '0' + mes;
      if (dia < 10) dia = '0' + dia;
      if (tipo == 1) return `${date.year}-${mes}-${dia}`;
    }
    if (tipo == 0 || tipo == 2) {
      var hora = time.hour;
      var minuto = time.minute;      
      if (hora < 10) hora = '0' + hora;
      if (minuto < 10) minuto = '0' + minuto;
      if (tipo == 2) return `${hora}:${minuto}`;
    }

    if (tipo == 0) {
      return `${date.year}-${mes}-${dia} ${hora}:${minuto}`;
    }
    
    

  }

  
}
