import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadSQAComponent } from './actividad-sqa.component';
import { ActividadSQARoutingModule } from './actividad-sqa-routing.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { RetroalimentacionModule } from '../retroalimentacion/retroalimentacion.module';
import { NotasModule } from '../notas/notas.module';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [ActividadSQAComponent],
  imports: [
    CommonModule,
    ActividadSQARoutingModule,
    CKEditorModule,
    FormsModule,
    EncabezadoPersonaModule,
    RetroalimentacionModule,
    NotasModule,
    LanguageTranslationModule,
    ReactiveFormsModule,


  ]
})
export class ActividadSQAModule { }
