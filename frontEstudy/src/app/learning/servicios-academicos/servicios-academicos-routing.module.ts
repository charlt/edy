import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosAcademicosComponent } from './servicios-academicos.component';

const routes: Routes = [
  {
    path:'',
    component: ServiciosAcademicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosAcademicosRoutingModule { }
