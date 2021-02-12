import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPreguntaComponent } from './consulta-pregunta.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaPreguntaComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaPreguntaRoutingModule { }
