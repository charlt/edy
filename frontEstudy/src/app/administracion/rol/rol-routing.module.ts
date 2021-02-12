import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolComponent } from './rol.component';
import { ConsultaComponent } from '../rol/consulta/consulta.component';
import { FormComponent } from '../rol/form/form.component';
import { PrivilegiosComponent } from './privilegios/privilegios.component';
import { EditaPrivilegiosComponent } from './edita-privilegios/edita-privilegios.component';



const routes: Routes = [
  {
      path: '',
      component: RolComponent,
      children: [
        { path: '', redirectTo: 'consulta', pathMatch: 'full' },
        { path: 'consulta', component: ConsultaComponent },
        { path: 'nuevo', component: FormComponent },
        { path: 'editar/:id', component: FormComponent},
        { path: 'privilegios/:id', component: PrivilegiosComponent},
        { path: 'editarPrivilegio/:id', component: EditaPrivilegiosComponent}



      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
