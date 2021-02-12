import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilegiosRoutingModule } from './privilegios-routing.module';
import { PrivilegiosComponent } from '../privilegios/privilegios.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedPipesModule } from '../../shared';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';


@NgModule({
  declarations: [PrivilegiosComponent, ConsultaComponent, FormComponent],
  imports: [
    CommonModule,
    PrivilegiosRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule
  ]
})
export class PrivilegiosModule { }
