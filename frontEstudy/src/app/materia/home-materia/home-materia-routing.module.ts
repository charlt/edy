import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMateriaComponent } from './home-materia.component';

const routes: Routes = [
  { path: '',component: HomeMateriaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeMateriaRoutingModule { }
