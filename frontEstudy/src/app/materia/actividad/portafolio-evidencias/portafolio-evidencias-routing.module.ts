import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioEvidenciasComponent } from './portafolio-evidencias.component';

const routes: Routes = [
  {
    path: '',
    component: PortafolioEvidenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioEvidenciasRoutingModule { }
