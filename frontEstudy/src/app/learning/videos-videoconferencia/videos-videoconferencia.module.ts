import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosVideoconferenciaRoutingModule } from './videos-videoconferencia-routing.module';
import { VideosVideoconferenciaComponent } from './videos-videoconferencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VideosVideoconferenciaComponent],
  imports: [
    CommonModule,
    VideosVideoconferenciaRoutingModule,
    FormsModule
  ]
})
export class VideosVideoconferenciaModule { }
