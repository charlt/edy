import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculacionComponent } from './matriculacion.component';

const routes: Routes = [
  {
    path: '',
    component: MatriculacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculacionRoutingModule { }
