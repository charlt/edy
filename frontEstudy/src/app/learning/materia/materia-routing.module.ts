import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaComponent } from './materia.component';

const routes: Routes = [
  {
    path: '',
    component: MateriaComponent,
    children: [
      { path: '', loadChildren: 'src/app/administracion/blank-page/blank-page.module#BlankPageModule' },
      //{ path: 'encuesta/:id', loadChildren: '../../components/encuestas/encuestas.module#EncuestasModule' },
      //{ path: 'ticket/:id_ticket', loadChildren: '../../components/tickets/tickets.module#TicketsModule' }
      // { path: '', redirectTo: 'materia', pathMatch: 'full' },
      // { path: 'materia', component: MateriaComponent }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaRoutingModule { }
