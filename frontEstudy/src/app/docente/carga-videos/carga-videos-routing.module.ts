import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaVideosComponent } from './carga-videos.component';

const routes: Routes = [
  { path: '', component: CargaVideosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargaVideosRoutingModule { }
