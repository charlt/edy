import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from './alumno.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from 'src/app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotasModule } from 'src/app/administracion/alumno/notas/notas.module';
import { AccesosModule } from 'src/app/administracion/alumno/accesos/accesos.module';

@NgModule({
  declarations: [AlumnoComponent, ConsultaComponent],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    LanguageTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    SharedPipesModule,
    NgbModule,
    NotasModule,
    AccesosModule
  ]
})
export class AlumnoModule { }
