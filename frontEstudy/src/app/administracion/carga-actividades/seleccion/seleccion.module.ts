import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeleccionRoutingModule } from './seleccion-routing.module';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { SeleccionComponent } from './seleccion.component';

@NgModule({
  declarations: [SeleccionComponent],
  imports: [
    CommonModule,
    SeleccionRoutingModule,
    ConsultaAsignaturaModule
  ]
})
export class SeleccionModule { }
