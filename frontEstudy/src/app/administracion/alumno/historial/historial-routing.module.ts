import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './historial.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: HistorialComponent },
  { path: 'historial/:id/nuevo', component:FormComponent },
  { path: 'historial/:id/editar/:id_historial', component:FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
