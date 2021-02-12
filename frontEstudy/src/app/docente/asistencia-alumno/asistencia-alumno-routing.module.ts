import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaAlumnoComponent } from './asistencia-alumno.component';

const routes: Routes = [
  { path: '', component: AsistenciaAlumnoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciaAlumnoRoutingModule { }
