import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcionMultipleComponent } from './opcion-multiple.component';

@NgModule({
  declarations: [OpcionMultipleModule.rootComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [  
      OpcionMultipleModule.rootComponent
  ]
})
export class OpcionMultipleModule { 
  static rootComponent = OpcionMultipleComponent
}
