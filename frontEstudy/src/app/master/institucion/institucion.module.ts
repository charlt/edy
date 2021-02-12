import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionRoutingModule } from './institucion-routing.module';
import { InstitucionComponent } from './institucion.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';


@NgModule({
  declarations: [InstitucionComponent, ConsultaComponent, FormComponent],
  imports: [
    CommonModule,
    InstitucionRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InstitucionModule { }
