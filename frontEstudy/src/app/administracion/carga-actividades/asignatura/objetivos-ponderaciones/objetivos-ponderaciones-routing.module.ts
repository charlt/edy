import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetivosPonderacionesComponent } from './objetivos-ponderaciones.component';

const routes: Routes = [
  {
    path: '',
    component: ObjetivosPonderacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjetivosPonderacionesRoutingModule { }
