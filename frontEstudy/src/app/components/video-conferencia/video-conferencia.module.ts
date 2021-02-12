import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoConferenciaRoutingModule } from './video-conferencia-routing.module';
import { VideoConferenciaComponent } from './video-conferencia.component';

@NgModule({
  declarations: [VideoConferenciaComponent],
  imports: [
    CommonModule,
    VideoConferenciaRoutingModule
  ],
  exports: [VideoConferenciaComponent]
})
export class VideoConferenciaModule { }
