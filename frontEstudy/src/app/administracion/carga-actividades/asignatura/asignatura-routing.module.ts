import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaComponent } from './asignatura.component';


const routes: Routes = [
  {
    path: '',
    component: AsignaturaComponent,
    children: [
          { path: '', redirectTo: 'modulos', pathMatch: 'full' },
          { path: 'modulos', loadChildren: './modulo/modulo.module#ModuloModule' },
          { path: 'modulosGrupo', loadChildren: './modulo/modulo.module#ModuloModule' },
          { path: 'objetivos-ponderaciones', loadChildren: './objetivos-ponderaciones/objetivos-ponderaciones.module#ObjetivosPonderacionesModule' },
          { path: 'control-actividad', loadChildren: './control-actividad/control-actividad.module#ControlActividadModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignaturaRoutingModule { }

