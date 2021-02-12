import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccesosComponent } from './accesos/accesos.component';
import { AccesosPersonaModule } from 'src/app/components/accesos-persona/accesos-persona.module';
import { MateriasDocenteComponent } from './materias-docente/materias-docente.component';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { TicketsAlumnoModule } from '../alumno/tickets-alumno/tickets-alumno.module';

@NgModule({
  declarations: [DocenteComponent, ConsultaComponent, AccesosComponent, MateriasDocenteComponent],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AccesosPersonaModule,
    EncabezadoPersonaModule,
    ConsultaAsignaturaModule,
    TicketsAlumnoModule
  ]
})
export class DocenteModule { }
