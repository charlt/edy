import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsAlumnoComponent } from 'src/app/administracion/alumno/tickets-alumno/tickets-alumno.component';
import { CleaverComponent } from 'src/app/administracion/aspirante/cleaver/cleaver.component';
import { ExpedienteComponent } from 'src/app/administracion/aspirante/expediente/expediente.component';
import { SolicitudComponent } from 'src/app/administracion/aspirante/solicitud/solicitud.component';
import { AspiranteComponent } from './aspirante.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  { path: '', component: AspiranteComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'solicitud/:id', component: SolicitudComponent },
      { path: 'expediente/:id', component: ExpedienteComponent },
      { path: 'cleaver/:id', component: CleaverComponent },
      { path: 'estadisticas', loadChildren: 'src/app/administracion/aspirante/estadistica/estadistica.module#EstadisticaModule' },
      { path: 'nuevo', loadChildren: 'src/app/signup/signup.module#SignupModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AspiranteRoutingModule { }
