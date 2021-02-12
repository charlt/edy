import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent as SolicitudPagoComponent  } from './solicitud.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudPagoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
