import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './modulo.component';


const routes: Routes = [
  {
    path: '',
    component: ModuloComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', loadChildren: './consulta/consulta.module#ConsultaModule'},
      { path: 'actividades/:id', loadChildren: './actividad/actividad.module#ActividadModule' }
      
      
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloRoutingModule { }

