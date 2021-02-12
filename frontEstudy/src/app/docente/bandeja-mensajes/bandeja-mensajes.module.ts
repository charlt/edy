import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejaMensajesRoutingModule } from './bandeja-mensajes-routing.module';
import { BandejaMensajesComponent } from './bandeja-mensajes.component';
import { MensajeriaModule } from '../mensajeria/mensajeria.module';

@NgModule({
  declarations: [BandejaMensajesComponent],
  imports: [
    CommonModule,
    BandejaMensajesRoutingModule,
    MensajeriaModule
  ]
})
export class BandejaMensajesModule { }
