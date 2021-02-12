import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsesorComponent } from './asesor.component';

const routes: Routes = [
  {
    path: '',
    component: AsesorComponent,
    children: [
      { path: '', redirectTo: 'aspirante', pathMatch: 'prefix' },
      //{ path: 'home', loadChildren: '../asesor/dashboard/dashboard.module#DashboardModule' },
      { path: 'home', loadChildren: '../asesor/aspirante/aspirante.module#AspiranteModule' },
      { path: 'alumno', loadChildren: '../asesor/alumno/alumno.module#AlumnoModule' },
      { path: 'aspirante', loadChildren: '../asesor/aspirante/aspirante.module#AspiranteModule' },
      
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
