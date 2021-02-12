import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculoCalificacionComponent } from './calculo-calificacion.component';

const routes: Routes = [
  { path: '', component: CalculoCalificacionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculoCalificacionRoutingModule { }
