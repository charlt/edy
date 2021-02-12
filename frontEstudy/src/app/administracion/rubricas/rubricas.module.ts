import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubricasRoutingModule } from './rubricas-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { RubricasComponent } from './rubricas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from 'src/app/shared';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [RubricasComponent, ConsultaComponent, FormComponent],
  imports: [
    CommonModule,
    RubricasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    LanguageTranslationModule
  ]
})
export class RubricasModule { }
