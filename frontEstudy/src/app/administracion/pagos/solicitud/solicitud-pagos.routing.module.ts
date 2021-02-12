import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudPagosComponent } from './solicitud-pagos.component';
// import { FormSolicitudComponent } from './form-solicitud/form-solicitud.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormColegiaturaComponent } from './form-colegiatura/form-colegiatura.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormPagoComponent } from './form-pago/form-pago.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudPagosComponent,
    children: [
      { path: '', redirectTo: 'consulta-pago', pathMatch: 'full' },
      { path: 'consulta-pago', component: ConsultaComponent },
      { path: 'nuevo-producto', component: FormProductoComponent },
      { path: 'nueva-colegiatura', component: FormColegiaturaComponent },
      { path: 'nueva-inscripcion', component: FormColegiaturaComponent },
      { path: 'nueva-inscripcion/:id1', component: FormColegiaturaComponent },
      { path: 'nueva-colegiatura/:id1', component: FormColegiaturaComponent },
      { path: 'nuevo-producto/:id1', component: FormProductoComponent },
      { path: 'estatus-pago/:id1', component: FormPagoComponent },
     // { path: 'edita/:id1', component: FormSolicitudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudPagosRoutingModule { }
