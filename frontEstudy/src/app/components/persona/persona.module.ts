import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [PersonaComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PersonaComponent]
})
export class PersonaModule { }
