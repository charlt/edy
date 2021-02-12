import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { ConsultaComponent } from '../usuario/consulta/consulta.component';
import { NuevoComponent } from '../usuario/nuevo/nuevo.component';
import { EditaComponent } from './edita/edita.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: NuevoComponent },
      { path: 'editar/:id', component: EditaComponent },
      { path: 'roles/:u/:p', component: RolesComponent },
      // { path: 'consulta/:tipo/:id', component: ConsultaComponent },// idUsuario = 1, idPersona = 2
    ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
