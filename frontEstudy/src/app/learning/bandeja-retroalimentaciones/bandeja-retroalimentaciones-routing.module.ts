import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandejaRetroalimentacionesComponent } from './bandeja-retroalimentaciones.component';

const routes: Routes = [
  {
    path:'',
    component: BandejaRetroalimentacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandejaRetroalimentacionesRoutingModule { }
