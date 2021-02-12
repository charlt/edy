import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { OpenPayTransferComponent } from './components/open-pay-transfer/open-pay-transfer.component';
import { OpenPayComponent } from './components/open-pay/open-pay.component';
import { PagoFacilComponent } from './components/pago-facil/pago-facil.component';

const routes: Routes = [
  // { path: '', redirectTo: '/inicio/00000', pathMatch: 'full' },
  { path: 'inicio/:id', component: InicioComponent },
  { path: 'open-pay/:id/:p', component: OpenPayComponent },
  { path: 'open-pay-transfer/:id', component: OpenPayTransferComponent },
  { path: 'completado-op/:auth', component: OpenPayComponent },
  { path: 'metodo/:id/2', component: PagoFacilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
