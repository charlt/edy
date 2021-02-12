import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteRoutingModule } from './expediente-routing.module';
import { ExpedienteComponent } from './expediente.component';
import { ExpedienteModule as ExpedienteAspiranteModule } from 'src/app/administracion/aspirante/expediente/expediente.module'

@NgModule({
  declarations: [ExpedienteComponent],
  imports: [
    CommonModule,
    ExpedienteRoutingModule,
    ExpedienteAspiranteModule
  ],
  exports: [ExpedienteComponent]
})
export class ExpedienteModule { }
