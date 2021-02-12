import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadDocenteComponent } from './actividad.component';

const routes: Routes = [
  {
    path: '', component: ActividadDocenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
