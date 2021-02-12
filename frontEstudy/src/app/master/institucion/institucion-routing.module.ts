import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitucionComponent } from 'src/app/master/institucion/institucion.component';
import { ConsultaComponent } from 'src/app/master/institucion/consulta/consulta.component';
import { FormComponent } from 'src/app/master/institucion/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: InstitucionComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'form', component: FormComponent },
      { path: 'editar/:id', component: FormComponent },
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionRoutingModule { }
