import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiplomaRoutingModule } from './diploma-routing.module';
import { DiplomaComponent } from './diploma.component';

@NgModule({
  declarations: [DiplomaComponent],
  imports: [
    CommonModule,
    DiplomaRoutingModule
  ],
  exports:[DiplomaComponent]
})
export class DiplomaModule { }
