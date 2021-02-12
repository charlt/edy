import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsAlumnoRoutingModule } from './tickets-alumno-routing.module';
import { TicketsAlumnoComponent } from './tickets-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [TicketsAlumnoComponent],
  imports: [
    CommonModule,
    TicketsAlumnoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    EncabezadoPersonaModule
  ],
  exports: [TicketsAlumnoComponent]
})
export class TicketsAlumnoModule { }
