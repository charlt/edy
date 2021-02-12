import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSwitchComponent } from './form-switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';

@NgModule({
  declarations: [FormSwitchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConsultaAsignaturaModule
  ],
  exports: [FormSwitchComponent]
})
export class FormSwitchModule { }
