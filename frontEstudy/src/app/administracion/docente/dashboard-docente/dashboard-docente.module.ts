import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDocenteRoutingModule } from './dashboard-docente-routing.module';
import { DashboardDocenteComponent } from './dashboard-docente.component';
import { GraficasPersonaModule } from 'src/app/components/graficas-persona/graficas-persona.module';


@NgModule({
  declarations: [DashboardDocenteComponent],
  imports: [
    CommonModule,
    DashboardDocenteRoutingModule,
    GraficasPersonaModule
  ]
})
export class DashboardDocenteModule { }
