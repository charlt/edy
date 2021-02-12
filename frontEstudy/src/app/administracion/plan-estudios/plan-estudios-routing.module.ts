import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanEstudiosComponent } from './plan-estudios.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';



const routes: Routes = [
  {
      path: '',
      component: PlanEstudiosComponent,
      children: [
        { path: '', redirectTo: 'consulta', pathMatch: 'full' },
        { path: 'consulta', component: ConsultaComponent },
        { path: 'nuevo', component: NuevoComponent },
        { path: 'vistaGeneral/:id/:id2', component: VistaGeneralComponent },
        { path: 'editar/:id/:id2', component: NuevoComponent }

      ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanEstudiosRoutingModule { }
