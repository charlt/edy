import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescuentosComponent } from './descuentos.component';
import { FormComponent } from './form/form.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: DescuentosComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'edita/:id', component: FormComponent },
      { path: 'consulta', component: ConsultaComponent},
      { path: 'nuevo',  component: FormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescuentosRoutingModule { }
