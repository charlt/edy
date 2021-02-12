import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing.module';
import { MateriaComponent } from './materia.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [MateriaComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    MateriaRoutingModule,
    
  ]
})
export class MateriaModule { }
