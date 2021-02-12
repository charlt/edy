import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { DocumentosComponent } from './documentos.component';

const routes: Routes = [
  { path: '', component: DocumentosComponent, 
    children: [
      // { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: '', component: ConsultaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosRoutingModule { }
