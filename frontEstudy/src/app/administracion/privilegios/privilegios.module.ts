import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilegiosRoutingModule } from './privilegios-routing.module';
import { PrivilegiosComponent } from '../privilegios/privilegios.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SharedPipesModule } from '../../shared';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/privilegios/', '.json');
}

@NgModule({
  declarations: [PrivilegiosComponent, ConsultaComponent, FormComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    PrivilegiosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule
  ]
})
export class PrivilegiosModule { }
