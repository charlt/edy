import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeleccionMateriaRoutingModule } from './seleccion-materia-routing.module';
import { SeleccionMateriaComponent } from './seleccion-materia.component';

@NgModule({
  declarations: [SeleccionMateriaComponent],
  imports: [
    CommonModule,
    SeleccionMateriaRoutingModule
  ]
})
export class SeleccionMateriaModule { }
