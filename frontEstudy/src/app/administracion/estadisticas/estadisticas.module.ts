import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasComponent } from './estadisticas.component';

@NgModule({
  declarations: [EstadisticasComponent],
  imports: [
    CommonModule,
    EstadisticasRoutingModule
  ],
  exports: [EstadisticasComponent]
})
export class EstadisticasModule { }
