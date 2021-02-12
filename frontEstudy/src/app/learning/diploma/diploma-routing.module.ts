import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiplomaComponent } from './diploma.component';

const routes: Routes = [
  {
    path:'',
    component: DiplomaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiplomaRoutingModule { }
