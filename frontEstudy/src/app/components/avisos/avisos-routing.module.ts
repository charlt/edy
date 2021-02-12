import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvisosComponent } from './avisos.component';

const routes: Routes = [
  {
    path:'',
    component: AvisosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisosRoutingModule { }
