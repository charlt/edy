import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvanceComponent } from './avance.component';

const routes: Routes = [
  { path: '',component: AvanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvanceRoutingModule { }
