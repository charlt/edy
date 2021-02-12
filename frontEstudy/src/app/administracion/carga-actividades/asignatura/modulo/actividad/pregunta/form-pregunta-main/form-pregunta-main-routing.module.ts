import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPreguntaMainComponent } from './form-pregunta-main.component';

const routes: Routes = [ {
  path: '',
  component: FormPreguntaMainComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPreguntaMainRoutingModule { }
