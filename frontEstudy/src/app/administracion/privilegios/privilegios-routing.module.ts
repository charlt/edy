import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivilegiosComponent } from './privilegios.component';
import { ConsultaComponent } from 'src/app/administracion/privilegios/consulta/consulta.component';
import {FormComponent} from 'src/app/administracion/privilegios/form/form.component'


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
