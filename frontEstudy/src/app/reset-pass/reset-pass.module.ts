import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPassRoutingModule } from './reset-pass-routing.module';
import { ResetPassComponent } from './reset-pass.component';
import { EncabezadoPersonaModule } from '../components/encabezado-persona/encabezado-persona.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResetPassComponent],
  imports: [
    CommonModule,
    ResetPassRoutingModule,
    EncabezadoPersonaModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ResetPassComponent]
})
export class ResetPassModule { }
