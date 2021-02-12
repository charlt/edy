import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RubricaComponent } from './rubrica.component';

const routes: Routes = [
  { path: '', component: RubricaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubricaRoutingModule { }
