import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  DashboardAlumnoComponent} from './dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardAlumnoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
