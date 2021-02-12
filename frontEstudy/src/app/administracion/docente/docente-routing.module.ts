import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { DocenteComponent } from './docente.component';
import { AccesosComponent } from './accesos/accesos.component';
import { MateriasDocenteComponent } from './materias-docente/materias-docente.component';
import { TicketsAlumnoComponent } from '../alumno/tickets-alumno/tickets-alumno.component';

const routes: Routes = [
  {
    path: '',
    component: DocenteComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'accesos/:id', component: AccesosComponent },
      { path: 'materias/:id', component: MateriasDocenteComponent },
      { path: 'dashboard/:id', loadChildren: './dashboard-docente/dashboard-docente.module#DashboardDocenteModule'},
      { path: 'expediente/:id', loadChildren: './expediente-docente/expediente-docente.module#ExpedienteDocenteModule'},
      { path: 'ticket-expediente/:id', component: TicketsAlumnoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
