import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesosComponent } from 'src/app/administracion/alumno/accesos/accesos.component';
import { NotasComponent } from 'src/app/administracion/alumno/notas/notas.component';
import { AlumnoComponent } from './alumno.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnoComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'dashboard/:id', loadChildren: 'src/app/administracion/alumno/dashboard/dashboard.module#DashboardModule'},
      { path: 'accesos/:id', component: AccesosComponent },
      { path: 'expediente/:id', loadChildren: 'src/app/learning/expediente/expediente.module#ExpedienteModule' },
      { path: 'historial/:id', loadChildren: 'src/app/administracion/alumno/historial/historial.module#HistorialModule' },
      { path: 'notas/:id', component: NotasComponent},
      { path: 'solicitud/:id', loadChildren: 'src/app/inscripcion/solicitud/solicitud.module#SolicitudModule'},
      { path: 'avance/:id', loadChildren: 'src/app/materia/avance/avance.module#AvanceModule'}
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
