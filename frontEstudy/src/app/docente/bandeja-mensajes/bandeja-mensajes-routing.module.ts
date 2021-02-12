import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandejaMensajesComponent } from './bandeja-mensajes.component';

const routes: Routes = [
  {path: '', component:BandejaMensajesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandejaMensajesRoutingModule { }
