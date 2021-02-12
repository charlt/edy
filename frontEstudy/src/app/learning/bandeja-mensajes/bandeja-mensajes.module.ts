import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejaMensajesRoutingModule } from './bandeja-mensajes-routing.module';
import { BandejaMensajesComponent } from './bandeja-mensajes.component';

@NgModule({
  declarations: [BandejaMensajesComponent],
  imports: [
    CommonModule,
    BandejaMensajesRoutingModule
  ],
  exports:[BandejaMensajesComponent]
})
export class BandejaMensajesModule { }
