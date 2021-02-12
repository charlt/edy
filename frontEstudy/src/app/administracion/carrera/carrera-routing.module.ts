import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreraComponent } from './carrera.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form-carrera/form-carrera.component';
import { FormCampusComponent } from './form-campus/form-campus.component';
import { CampusCarreraComponent } from './campus-carrera/campus-carrera.component';

const routes: Routes = [
  {
      path: '',
      component: CarreraComponent,
      children: [
        { path: '', redirectTo: 'consulta', pathMatch: 'full' },
        { path: 'consulta', component: ConsultaComponent },
        { path: 'nuevaCarrera', component: FormComponent },
        { path: 'editaCarrera/:id', component: FormComponent },
        { path: 'formCampus', component: FormCampusComponent },
        { path: 'campusCarrera', component: CampusCarreraComponent },
        { path: 'nuevoCampus', component: FormCampusComponent },
        { path: 'editaCampus/:id', component: FormCampusComponent }
      ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarreraRoutingModule { }
