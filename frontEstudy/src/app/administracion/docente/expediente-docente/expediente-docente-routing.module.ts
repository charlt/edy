import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpedienteDocenteComponent } from './expediente-docente.component';

const routes: Routes = [
  { path: '', component: ExpedienteDocenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedienteDocenteRoutingModule { }
