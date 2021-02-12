import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorcentajeComponent } from './porcentaje.component';

const routes: Routes = [
  {
    path:'',
    component: PorcentajeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorcentajeRoutingModule { }
