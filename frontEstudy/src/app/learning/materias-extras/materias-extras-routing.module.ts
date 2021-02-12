import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriasExtrasComponent } from './materias-extras.component';

const routes: Routes = [
  {
    path:'',
    component: MateriasExtrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasExtrasRoutingModule { }
