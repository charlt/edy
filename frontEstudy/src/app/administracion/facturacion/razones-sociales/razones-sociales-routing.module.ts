import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  RazonesSocialesComponent} from './razones-sociales.component';
import {  ConsultaComponent} from './consulta/consulta.component';
import {  CreaRazonComponent} from './crea-razon/crea-razon.component';
import {  EditaRazonComponent} from './edita-razon/edita-razon.component';

const routes: Routes = [ {
  path: '',
  component: RazonesSocialesComponent,
  children: [
    { path: '', redirectTo: 'consulta', pathMatch: 'full' },
    { path: 'edita/:id', component: EditaRazonComponent },
    { path: 'nuevo', component: CreaRazonComponent },
    { path: 'consulta', component: ConsultaComponent }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RazonesSocialesRoutingModule { }
