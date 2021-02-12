import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelacionColumnasComponent } from './relacion-columnas.component';

@NgModule({
  declarations: [RelacionColumnasModule.rootComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [  
    RelacionColumnasModule.rootComponent
  ]
})
export class RelacionColumnasModule {
  static rootComponent = RelacionColumnasComponent;
}
