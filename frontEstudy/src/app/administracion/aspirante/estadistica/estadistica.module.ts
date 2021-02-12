import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticaRoutingModule } from './estadistica-routing.module';
import { EstadisticaComponent } from './estadistica.component';

@NgModule({
  declarations: [EstadisticaComponent],
  imports: [
    CommonModule,
    EstadisticaRoutingModule
  ]
})
export class EstadisticaModule { }
