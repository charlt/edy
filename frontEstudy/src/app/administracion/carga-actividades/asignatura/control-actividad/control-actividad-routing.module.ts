import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlActividadComponent } from './control-actividad.component';

const routes: Routes = [
  {
    path: '',
    component: ControlActividadComponent,
    children: []
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlActividadRoutingModule { }
