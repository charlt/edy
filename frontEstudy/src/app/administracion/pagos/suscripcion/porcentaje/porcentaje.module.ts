import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorcentajeRoutingModule } from './porcentaje-routing.module';
import { PorcentajeComponent } from './porcentaje.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PorcentajeComponent],
  imports: [
    CommonModule,
    PorcentajeRoutingModule,
    LanguageTranslationModule,
    ReactiveFormsModule
  ]
})
export class PorcentajeModule { }
