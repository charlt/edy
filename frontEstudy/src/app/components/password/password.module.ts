import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PasswordComponent]
})
export class PasswordModule { }
