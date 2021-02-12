import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { RubricasComponent } from './rubricas.component';

const routes: Routes = [
  {
    path: '',
    component: RubricasComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: FormComponent },
      { path: 'editar/:id', component: FormComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubricasRoutingModule { }
