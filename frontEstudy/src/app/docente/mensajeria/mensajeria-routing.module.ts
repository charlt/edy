import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajeriaComponent } from './mensajeria.component';

const routes: Routes = [
  {
    path: '', 
    component: MensajeriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajeriaRoutingModule { }
