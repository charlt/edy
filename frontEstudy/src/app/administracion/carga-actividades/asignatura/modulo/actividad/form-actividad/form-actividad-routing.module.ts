import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormActividadComponent } from './form-actividad.component';


const routes: Routes = [
  {
    path: '',
    component: FormActividadComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormActividadRoutingModule { }
