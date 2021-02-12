import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvisosDocenteComponent } from './avisos-docente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: AvisosDocenteComponent,
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
export class AvisosDocenteRoutingModule { }
