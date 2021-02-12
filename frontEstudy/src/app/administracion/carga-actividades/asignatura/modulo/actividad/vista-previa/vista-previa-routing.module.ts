import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaPreviaComponent } from './vista-previa.component';


const routes: Routes = [
  {
    path: '',
    component: VistaPreviaComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaPreviaRoutingModule { }
