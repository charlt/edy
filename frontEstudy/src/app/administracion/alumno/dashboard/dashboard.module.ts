import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardAlumnoComponent } from './dashboard.component';
import { GraficasPersonaModule } from 'src/app/components/graficas-persona/graficas-persona.module';

@NgModule({
  declarations: [DashboardAlumnoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GraficasPersonaModule
  ]
})
export class DashboardModule { }
