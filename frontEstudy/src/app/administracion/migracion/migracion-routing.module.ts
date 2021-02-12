import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MigracionComponent } from './migracion.component';

const routes: Routes = [{path: '',component: MigracionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MigracionRoutingModule { }
