import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjetivosPonderacionesRoutingModule } from './objetivos-ponderaciones-routing.module';
import { ObjetivosPonderacionesComponent } from './objetivos-ponderaciones.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ObjetivosPonderacionesComponent],
  imports: [
    CommonModule,
    ObjetivosPonderacionesRoutingModule,
    LanguageTranslationModule,
    FormsModule
  ]
})
export class ObjetivosPonderacionesModule { }
