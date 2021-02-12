import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadComponent } from './actividad.component';


@NgModule({
  declarations: [ActividadComponent],
  imports: [
    CommonModule,
    ActividadRoutingModule,
  ],
  exports:[
    ActividadComponent
  ]
})
export class ActividadModule { }
