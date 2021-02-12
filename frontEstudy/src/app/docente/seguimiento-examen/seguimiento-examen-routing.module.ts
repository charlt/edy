import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguimientoExamenComponent } from './seguimiento-examen.component';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoExamenComponent,
    // children: [
    //   { path: '', redirectTo: 'consulta', pathMatch: 'full' },
    // ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientoExamenRoutingModule { }
