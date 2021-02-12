import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandejaRetroalimentacionComponent } from './bandeja-retroalimentacion.component';

const routes: Routes = [
  {path: '', component: BandejaRetroalimentacionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandejaRetroalimentacionRoutingModule { }
