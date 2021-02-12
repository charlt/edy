import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorreccionComponent } from './correccion.component';

const routes: Routes = [
  {
    path: '', component: CorreccionComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorreccionRoutingModule { }
