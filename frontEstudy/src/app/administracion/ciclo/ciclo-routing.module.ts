import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CicloComponent} from './ciclo.component';
import { NuevoComponent} from './nuevo/nuevo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { TransferirCicloComponent } from './transferir-ciclo/transferir-ciclo.component';

const routes: Routes = [
  {
      path: '',
      component: CicloComponent,
      children: [
        { path: '', redirectTo: 'consulta', pathMatch: 'full' },
        { path: 'nuevo', component: NuevoComponent },
        { path: 'consulta', component: ConsultaComponent },
        { path: 'editar/:id', component: NuevoComponent},
        { path: 'transferir/:id', component: TransferirCicloComponent}
      ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CicloRoutingModule { }
