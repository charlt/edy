import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientoExamenRoutingModule } from './seguimiento-examen-routing.module';
import { SeguimientoExamenComponent } from './seguimiento-examen.component';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SeguimientoExamenComponent],
  imports: [
    CommonModule,
    SeguimientoExamenRoutingModule,
    ConsultaAsignaturaModule,
    FormsModule
  ]
})
export class SeguimientoExamenModule { }
