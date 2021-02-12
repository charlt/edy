import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainActividadComponent } from './main.component';

const routes: Routes = [
  {
      path: '',
      component: MainActividadComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainActividadRoutingModule { }
