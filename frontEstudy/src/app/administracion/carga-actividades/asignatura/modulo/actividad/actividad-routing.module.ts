import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadComponent } from './actividad.component';



const routes: Routes = [
  {
    path: '',
    component: ActividadComponent,
    children: [
      { path: '', loadChildren: './consulta-actividad/consulta-actividad.module#ConsultaActividadModule'},
      { path: 'edita/:id', loadChildren: './form-actividad/form-actividad.module#FormActividadModule' },
      { path: 'nuevo', loadChildren: './form-actividad/form-actividad.module#FormActividadModule' },
      { path: 'vista-previa/:id', loadChildren: './vista-previa/vista-previa.module#VistaPreviaModule' },
      { path: 'preguntas/:id', loadChildren: './pregunta/pregunta.module#PreguntaModule' },
      
  ]
  }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
