import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from './grupo.component';
import { ConsultaComponent } from '../grupo/consulta/consulta.component';
import { FormComponent } from '../grupo/form/form.component';

import { ConsultaAlumnosComponent } from './consulta-alumnos/consulta-alumnos.component';
import { ConsultaAsignaturasComponent } from './consulta-asignaturas/consulta-asignaturas.component';
import { ConsultaAlumnosAsignaturasComponent } from './consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component';

const routes: Routes = [
  {
    path: '',
    component: GrupoComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: FormComponent },
      { path: 'editar/:id', component: FormComponent },
      { path: 'consultaAsignaturas/:id', component: ConsultaAsignaturasComponent },
      { path: 'consultaAlumnos/:id', component: ConsultaAlumnosComponent },
      { path: 'alumnoAsignatura/:id', component: ConsultaAlumnosAsignaturasComponent },
      { path: 'calculo/:id1/:id2',  loadChildren: './calculo-calificacion/calculo-calificacion.module#CalculoCalificacionModule' },
      { path: 'calificaciones/:id',  loadChildren: './calificaciones/calificaciones.module#CalificacionesModule' },
      { path: 'actividad/:id1/:id2', loadChildren: 'src/app/docente/actividad/actividad.module#ActividadDocenteModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
