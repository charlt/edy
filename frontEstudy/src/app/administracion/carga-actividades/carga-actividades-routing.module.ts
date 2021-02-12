import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CargaActividadesComponent} from './carga-actividades.component';
import { SeleccionComponent } from './seleccion/seleccion.component';

const routes: Routes = [
{
  path : '',
  component: CargaActividadesComponent,
  children: [
    { path: '', redirectTo: 'seleccion', pathMatch: 'full' },
    { path: 'seleccion', loadChildren: './seleccion/seleccion.module#SeleccionModule' },
    { path: 'asignatura/:id/:id2', loadChildren: './asignatura/asignatura.module#AsignaturaModule' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargaActividadesRoutingModule { }
