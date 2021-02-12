import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaImagenesComponent } from './zona-imagenes.component';

@NgModule({
  declarations: [ZonaImagenesModule.rootComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [  
    ZonaImagenesModule.rootComponent
  ]
})
export class ZonaImagenesModule { 
  static rootComponent = ZonaImagenesComponent
}
