import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreguntaComponent } from './pregunta.component';

const routes: Routes = [
  {
    path: '',
    component: PreguntaComponent,
    children: [
      { path: '', loadChildren: './consulta-pregunta/consulta-pregunta.module#ConsultaPreguntaModule'},
      { path: 'nuevo', loadChildren: './form-pregunta-main/form-pregunta-main.module#FormPreguntaMainModule' },
      { path: 'edita/:id', loadChildren: './form-pregunta-main/form-pregunta-main.module#FormPreguntaMainModule' }
  ]
  }];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntaRoutingModule { }
