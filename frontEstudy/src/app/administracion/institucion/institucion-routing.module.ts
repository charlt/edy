import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitucionComponent } from './institucion.component';
import { FormInstitucionComponent } from './form-institucion/form-institucion.component';

const routes: Routes = [
  {
    path: '',
    component: InstitucionComponent,
    children: [
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      { path: 'form', component: FormInstitucionComponent },
      //{ path: 'consulta', component: ConsultaComponent },
      //{ path: 'editar/:id', component: NuevoComponent}
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionRoutingModule { }
