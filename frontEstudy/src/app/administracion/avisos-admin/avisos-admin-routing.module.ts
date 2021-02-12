import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvisosAdminComponent } from './avisos-admin.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {
    path: '',
    component: AvisosAdminComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: NuevoComponent },
      { path: 'editar/:id', component: NuevoComponent},
      { path: 'switch/:id', component: SwitchComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisosAdminRoutingModule { }
