import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AspiranteRoutingModule } from './aspirante-routing.module';
import { AspiranteComponent } from './aspirante.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { SolicitudModule } from 'src/app/administracion/aspirante/solicitud/solicitud.module';
import { ExpedienteModule } from 'src/app/administracion/aspirante/expediente/expediente.module';
import { CleaverModule } from 'src/app/administracion/aspirante/cleaver/cleaver.module';

@NgModule({
  declarations: [AspiranteComponent, ConsultaComponent],
  imports: [
    CommonModule,
    AspiranteRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    NgbModule,
    ConsultaAsignaturaModule,
    SolicitudModule,
    ExpedienteModule,
    CleaverModule
  ]
})
export class AspiranteModule { }
