import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaActividadRoutingModule } from './consulta-actividad-routing.module';
import { ConsultaActividadComponent } from './consulta-actividad.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConsultaActividadComponent],
  imports: [
    CommonModule,
    ConsultaActividadRoutingModule,
    LanguageTranslationModule,
    DragDropModule,
    ReactiveFormsModule
  ]
})
export class ConsultaActividadModule { }
