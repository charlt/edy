import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManejadorCorreoComponent } from './manejador-correo.component';
import { EditaCorreoComponent } from './edita-correo/edita-correo.component';
import { NuevoCorreoComponent } from './nuevo-correo/nuevo-correo.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: ManejadorCorreoComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: NuevoCorreoComponent },
      { path: 'editar/:id', component: NuevoCorreoComponent }      
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManejadorCorreoRoutingModule { }
