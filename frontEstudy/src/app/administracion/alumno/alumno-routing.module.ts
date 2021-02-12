import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno.component';
import { ConsultaComponent } from '../alumno/consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { ExpedienteComponent } from 'src/app/learning/expediente/expediente.component';
import { AccesosComponent } from './accesos/accesos.component';
import { TicketsAlumnoComponent } from './tickets-alumno/tickets-alumno.component';
import { ConsultaTicketsAlumnoComponent } from './consulta-tickets-alumno/consulta-tickets-alumno.component';
import { NotasComponent } from './notas/notas.component';
import { PendientesComponent } from './pendientes/pendientes.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnoComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: FormComponent },
      { path: 'expediente/:id', component: ExpedienteComponent },
      { path: 'accesos/:id', component: AccesosComponent },
      { path: 'ticket/:id', component: TicketsAlumnoComponent },
      { path: 'ticket-expediente/:id', component: TicketsAlumnoComponent },
      { path: 'consulta-ticket/:id', component: ConsultaTicketsAlumnoComponent },
      { path: 'notas/:id', component: NotasComponent},
      { path: 'dashboard/:id', loadChildren: 'src/app/administracion/alumno/dashboard/dashboard.module#DashboardModule'},
      { path: 'materias/:id', loadChildren: './materias-alumnos/materias-alumnos.module#MateriasAlumnosModule'},
      { path: 'historial/:id', loadChildren: 'src/app/administracion/alumno/historial/historial.module#HistorialModule' },
      { path: 'carrera/:id', loadChildren: './carrera/carrera.module#CarreraModule'},
      { path: 'solicitud/:id', loadChildren: 'src/app/inscripcion/solicitud/solicitud.module#SolicitudModule'},
      { path: 'avance/:id', loadChildren: 'src/app/materia/avance/avance.module#AvanceModule'},
      { path: 'pendientes', component: PendientesComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
