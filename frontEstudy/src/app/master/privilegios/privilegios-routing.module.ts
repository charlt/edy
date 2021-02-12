import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivilegiosComponent } from 'src/app/master/privilegios/privilegios.component';
import { ConsultaComponent } from 'src/app/master/privilegios/consulta/consulta.component';
import {FormComponent} from 'src/app/master/privilegios/form/form.component'

const routes: Routes = [
  {
    path: '',
    component: PrivilegiosComponent,
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
export class PrivilegiosRoutingModule { }
