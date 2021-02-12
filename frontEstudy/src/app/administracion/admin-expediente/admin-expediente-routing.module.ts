import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminExpedienteComponent } from './admin-expediente.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  { path: '', component: AdminExpedienteComponent, 
    children: [
      { path: '', component: ConsultaComponent },
      { path: 'documentos', loadChildren: './documentos/documentos.module#DocumentosModule' },
      { path: 'etiquetas', loadChildren: './etiquetas/etiquetas.module#EtiquetasModule' }
    ]
  },
  // { path: 'documentos/nuevo', component: FormComponent },
  // { path: 'documentos/editar/:id', component: FormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminExpedienteRoutingModule { }
