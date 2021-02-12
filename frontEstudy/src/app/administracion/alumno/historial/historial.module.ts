import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent } from './historial.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [HistorialComponent, FormComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConsultaAsignaturaModule,
    EncabezadoPersonaModule
  ],
  exports: [HistorialComponent]
})
export class HistorialModule { }
