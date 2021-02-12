import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleaverComponent } from './cleaver.component';

const routes: Routes = [
  {path: '', component: CleaverComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CleaverRoutingModule { }
