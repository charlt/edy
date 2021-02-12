import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculoCalificacionRoutingModule } from './calculo-calificacion-routing.module';
import { CalculoCalificacionComponent } from './calculo-calificacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculoCalificacionComponent],
  imports: [
    CommonModule,
    CalculoCalificacionRoutingModule,
    FormsModule
  ]
})
export class CalculoCalificacionModule { }
