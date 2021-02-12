import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaPreguntaComponent } from './consulta-pregunta.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ConsultaPreguntaRoutingModule } from './consulta-pregunta-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    ConsultaPreguntaComponent,
    
    ],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    ConsultaPreguntaRoutingModule,
    DragDropModule

  ]
})
export class ConsultaPreguntaModule { }
