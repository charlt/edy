import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuscripcionComponent } from './suscripcion.component';


const routes: Routes = [
  {
    path: '',
    component: SuscripcionComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuscripcionRoutingModule { }
