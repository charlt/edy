import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaAsignaturaComponent } from "./consulta-asignatura.component";
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConsultaAsignaturaComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [ConsultaAsignaturaComponent]
})
export class ConsultaAsignaturaModule { }