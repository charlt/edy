import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosVideoconferenciaComponent } from './videos-videoconferencia.component';

const routes: Routes = [
  {
    path:'',
    component: VideosVideoconferenciaComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosVideoconferenciaRoutingModule { }
