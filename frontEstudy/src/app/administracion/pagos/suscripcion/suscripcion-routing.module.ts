import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuscripcionComponent } from './suscripcion.component';
import { FormComponent } from './form/form.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [ {
  path: '',
  component: SuscripcionComponent,
  children: [
    { path: '', redirectTo: 'consulta', pathMatch: 'full' },
    { path: 'edita/:id', component: FormComponent },
    { path: 'nuevo', component: FormComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: 'porcentaje/:id',  loadChildren: './porcentaje/porcentaje.module#PorcentajeModule' },
    { path: 'generar-pago/:id',  loadChildren: './generar-pago/generar-pago.module#GenerarPagoModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuscripcionRoutingModule { }
