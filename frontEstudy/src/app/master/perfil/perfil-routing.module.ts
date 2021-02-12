import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';


const routes: Routes = [
  {
    path: '',
    component: PerfilComponent,
    children: [
      { path: '', redirectTo: 'mis-datos', pathMatch: 'full' },
      { path: 'mis-datos', component: MisDatosComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
