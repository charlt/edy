import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();

    return items.filter(function(elemento) {
      var coincidencia = 0;
      for (var prop in elemento) {
        if (elemento[prop] && typeof elemento[prop] === 'string' && elemento[prop].toLowerCase().includes(searchText)) {
            coincidencia = 1;
        }
      }  
      return coincidencia; 
    });  
   }
}
