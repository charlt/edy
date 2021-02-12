import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubricaRoutingModule } from './rubrica-routing.module';
import { RubricaComponent } from './rubrica.component';

@NgModule({
  declarations: [RubricaComponent],
  imports: [
    CommonModule,
    RubricaRoutingModule
  ],
  exports: [
    RubricaComponent
  ]
})
export class RubricaModule { }
