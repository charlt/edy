import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarPagoComponent } from './generar-pago.component';

const routes: Routes = [{
  path : '',
  component : GenerarPagoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarPagoRoutingModule { }
