import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsAlumnoComponent } from './tickets-alumno.component';

const routes: Routes = [
  { path: '', component: TicketsAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsAlumnoRoutingModule { }
