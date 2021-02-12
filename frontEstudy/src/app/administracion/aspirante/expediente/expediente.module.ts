import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteRoutingModule } from './expediente-routing.module';
import { ExpedienteComponent } from './expediente.component';
import { DocumentosModule } from 'src/app/inscripcion/documentos/documentos.module';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [ExpedienteComponent],
  imports: [
    CommonModule,
    ExpedienteRoutingModule,
    DocumentosModule,
    EncabezadoPersonaModule
  ],
  exports: [ExpedienteComponent]
})
export class ExpedienteModule { }
