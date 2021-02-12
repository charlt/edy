import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesosPersonaComponent } from './accesos-persona.component';
import { EncabezadoPersonaModule } from '../encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [AccesosPersonaComponent],
  imports: [
    CommonModule,
    EncabezadoPersonaModule
  ],
  exports:[AccesosPersonaComponent]
})
export class AccesosPersonaModule { }
