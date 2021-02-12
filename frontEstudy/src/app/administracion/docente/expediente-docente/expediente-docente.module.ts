import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteDocenteRoutingModule } from './expediente-docente-routing.module';
import { ExpedienteModule as ExpedienteAspiranteModule } from 'src/app/administracion/aspirante/expediente/expediente.module'
import { ExpedienteDocenteComponent } from './expediente-docente.component';


@NgModule({
  declarations: [ExpedienteDocenteComponent],
  imports: [
    CommonModule,
    ExpedienteDocenteRoutingModule,
    ExpedienteAspiranteModule
  ],
  exports: [ExpedienteDocenteComponent]
})
export class ExpedienteDocenteModule { }
