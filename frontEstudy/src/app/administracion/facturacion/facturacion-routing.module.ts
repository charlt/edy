import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  FacturacionComponent} from './facturacion.component';
import {  ConsultaComponent} from './consulta/consulta.component';


const routes: Routes = [
  {
    path: '',
    component: FacturacionComponent,
    children: [
      { path: '', redirectTo: 'vinculacion', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'vinculacion', loadChildren: './razones-sociales/razones-sociales.module#RazonesSocialesModule' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionRoutingModule { }
