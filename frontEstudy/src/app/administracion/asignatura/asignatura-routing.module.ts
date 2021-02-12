import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignaturaComponent } from './asignatura.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormAsignaturaComponent} from './form/form.component';
import { SubirExcelComponent } from './subir-excel/subir-excel.component';
// import { EdicionModule } from './edicion/edicion.module';
import { EdicionComponent } from './edicion/edicion.component';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: FormAsignaturaComponent },
      { path: 'subir-excel', component: SubirExcelComponent },
      { path: 'editar/:id', component: EdicionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignaturaRoutingModule { }