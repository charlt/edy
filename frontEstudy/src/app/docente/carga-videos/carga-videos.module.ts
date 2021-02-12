import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaVideosRoutingModule } from './carga-videos-routing.module';
import { CargaVideosComponent } from './carga-videos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CargaVideosComponent],
  imports: [
    CommonModule,
    CargaVideosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CargaVideosComponent]
})
export class CargaVideosModule { }
