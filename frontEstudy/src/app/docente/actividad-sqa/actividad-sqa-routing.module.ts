import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadSQAComponent } from './actividad-sqa.component';

const routes: Routes = [
  {
   path: '', component: ActividadSQAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadSQARoutingModule { }
