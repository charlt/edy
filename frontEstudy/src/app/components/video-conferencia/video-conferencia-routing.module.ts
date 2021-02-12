import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoConferenciaComponent } from './video-conferencia.component';

const routes: Routes = [
  { path: '', component: VideoConferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoConferenciaRoutingModule { }
