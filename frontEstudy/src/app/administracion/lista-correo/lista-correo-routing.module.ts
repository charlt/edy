import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaCorreoComponent } from './lista-correo.component';


const routes: Routes = [
  {
    path: '',
    component: ListaCorreoComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: NuevoComponent },
      { path: 'editar/:id', component: NuevoComponent }      
    ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaCorreoRoutingModule { }
