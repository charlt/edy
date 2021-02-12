import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { EtiquetasComponent } from './etiquetas.component';

const routes: Routes = [
  { path: '', component: EtiquetasComponent, 
    children: [
      // { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: '', component: ConsultaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtiquetasRoutingModule { }
