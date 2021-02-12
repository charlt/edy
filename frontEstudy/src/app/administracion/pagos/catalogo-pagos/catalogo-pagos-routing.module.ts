import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoPagosComponent } from './catalogo-pagos.component';
import { FormComponent} from './form/form.component';
import { ConsultaComponent} from './consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPagosComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'edita/:id', component: FormComponent },
      { path: 'nuevo', component: FormComponent },
      { path: 'consulta', component: ConsultaComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoPagosRoutingModule { }
