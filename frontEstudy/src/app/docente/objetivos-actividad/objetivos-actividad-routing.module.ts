import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetivosActividadComponent } from './objetivos-actividad.component';

const routes: Routes = [
  {
    path: '', component: ObjetivosActividadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjetivosActividadRoutingModule { }
