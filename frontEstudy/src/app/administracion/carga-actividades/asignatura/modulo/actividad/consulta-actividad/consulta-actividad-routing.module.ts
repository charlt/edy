import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaActividadComponent } from './consulta-actividad.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaActividadComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaActividadRoutingModule { }
