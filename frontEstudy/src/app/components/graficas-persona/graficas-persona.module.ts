import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { GraficasPersonaComponent } from './graficas-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncabezadoPersonaModule } from '../encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [GraficasPersonaComponent],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    EncabezadoPersonaModule
  ],
  exports: [GraficasPersonaComponent]
})
export class GraficasPersonaModule { }
