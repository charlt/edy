import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AspiranteComponent } from './aspirante.component';
import { ConsultaComponent } from '../aspirante/consulta/consulta.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { CleaverComponent } from './cleaver/cleaver.component';
import { TicketsAlumnoComponent } from '../alumno/tickets-alumno/tickets-alumno.component';

const routes: Routes = [
  {
    path: '',
    component: AspiranteComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      // { path: 'nuevo', component: NuevoComponent },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'solicitud/:id', component: SolicitudComponent },
      { path: 'expediente/:id', component: ExpedienteComponent },
      { path: 'cleaver/:id', component: CleaverComponent },
      { path: 'ticket-expediente/:id', component: TicketsAlumnoComponent },
      { path: 'estadisticas', loadChildren: './estadistica/estadistica.module#EstadisticaModule' },

      // { path: 'editar/:id', component: NuevoComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspiranteRoutingModule { }
