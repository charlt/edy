import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { SharedPipesModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ConsultaAlumnosComponent } from './consulta-alumnos/consulta-alumnos.component';
import { ConsultaAsignaturasComponent } from './consulta-asignaturas/consulta-asignaturas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { BuscadorPersonaModule } from 'src/app/components/buscadorPersona/buscador-persona.module';
import { ConsultaAlumnosAsignaturasComponent } from './consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component';

@NgModule({
  declarations: [GrupoComponent, ConsultaComponent, FormComponent, ConsultaAlumnosComponent, ConsultaAsignaturasComponent, ConsultaAlumnosAsignaturasComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    GrupoRoutingModule,
    ConsultaAsignaturaModule,
    BuscadorPersonaModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedPipesModule
  ]
})
export class GrupoModule { }
