import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentosRoutingModule } from './descuentos-routing.module';
import { DescuentosComponent } from './descuentos.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';




@NgModule({
  declarations: [DescuentosComponent, ConsultaComponent, FormComponent],
  imports: [
    CommonModule,
    DescuentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule
  ]
})
export class DescuentosModule { }
