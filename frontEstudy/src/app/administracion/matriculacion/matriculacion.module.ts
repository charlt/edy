import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculacionRoutingModule } from './matriculacion-routing.module';
import { MatriculacionComponent } from './matriculacion.component';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';


@NgModule({
  declarations: [MatriculacionComponent],
  imports: [
    CommonModule,
    MatriculacionRoutingModule,
    ConsultaAsignaturaModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule
  ]
})
export class MatriculacionModule { }
