import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PagosAlumnosComponent} from './alumnos.component';
import { FormComponent} from './form/form.component';
import { ConsultaComponent} from './consulta/consulta.component';
import { CargaLayoutPagosComponent } from './carga-layout-pagos/carga-layout-pagos.component';

const routes: Routes = [
  {
    path: '',
    component: PagosAlumnosComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'edita/:id', component: FormComponent },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'layout',  component: CargaLayoutPagosComponent },
      { path: 'solicitud/:id',  loadChildren: './solicitud/solicitud-pago.module#SolicitudModule' },
      { path: 'suscripcion/:id',  loadChildren: './suscripcion/suscripcion.module#SuscripcionModule' },
      { path: 'suscripcion/:id/:id2',  loadChildren: './suscripcion/suscripcion.module#SuscripcionModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
