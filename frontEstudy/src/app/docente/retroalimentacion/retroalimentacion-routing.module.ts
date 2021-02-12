import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetroalimentacionComponent } from './retroalimentacion.component';

const routes: Routes = [
  {path: '', component: RetroalimentacionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetroalimentacionRoutingModule { }
