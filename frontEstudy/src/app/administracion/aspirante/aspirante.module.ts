import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AspiranteRoutingModule } from './aspirante-routing.module';
import { AspiranteComponent } from './aspirante.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ExpedienteModule } from './expediente/expediente.module';
import { SolicitudModule } from './solicitud/solicitud.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketsAlumnoModule } from '../alumno/tickets-alumno/tickets-alumno.module';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { CleaverModule } from './cleaver/cleaver.module';


@NgModule({
  declarations: [AspiranteComponent, ConsultaComponent],
  imports: [
    CommonModule,
    AspiranteRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    ExpedienteModule,
    SolicitudModule,
    NgbModule,
    TicketsAlumnoModule,
    ConsultaAsignaturaModule,
    ReactiveFormsModule,
    CleaverModule
  ]
})
export class AspiranteModule { }
