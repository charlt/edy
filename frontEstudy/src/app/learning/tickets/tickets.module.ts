import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketsModule as TicketsComponentModule } from "src/app/components/tickets/tickets.module";
import { NuevoComponent } from './nuevo/nuevo.component';
import { TicketsAlumnoModule } from 'src/app/administracion/alumno/tickets-alumno/tickets-alumno.module';

@NgModule({
  declarations: [TicketsComponent, NuevoComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    TicketsComponentModule,
    TicketsAlumnoModule
  ],
  exports: [TicketsComponent]
})
export class TicketsModule { }
