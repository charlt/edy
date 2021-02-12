import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'nuevo', component: NuevoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
