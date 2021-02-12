import { FormControl } from '@angular/forms';
import { Archivo } from 'src/app/services/archivos';



export function requiredFileType( type: number ) {
  return function ( control: FormControl ) {

    let archivo = Archivo;
    let tipoArchivos;
    if(type == 0){
      type = archivo.length-1;
      tipoArchivos = archivo[type].formatos;
    }else{
      tipoArchivos = archivo[type].formatos;
    }

    

    
    const file = control.value;
    if ( file ) {
      const archivo = file.name.split('.');
      var longitud = archivo.length;      
      const extension = file.name.split('.')[longitud-1].toLowerCase();
      if ( tipoArchivos.indexOf(extension.toLowerCase()) == -1) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}