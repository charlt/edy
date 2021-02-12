import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestaComponent } from './encuesta.component';
import { FormMainComponent } from './form-main/form-main.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', redirectTo: 'consulta' }, 
  { path: 'consulta', component: EncuestaComponent }, 
  { path: 'nuevo', component: FormMainComponent }, 
  { path: 'editar/:id/:id2', component: FormMainComponent }, 
  { path: 'estadisticas/:id', component: EstadisticasComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }
