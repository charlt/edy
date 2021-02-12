import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuscripcionRoutingModule } from './suscripcion-routing.module';
import { FormComponent } from './form/form.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormModule } from '../../form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SuscripcionComponent } from './suscripcion.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [ FormComponent,ConsultaComponent, SuscripcionComponent],
  imports: [
    CommonModule,
    SuscripcionRoutingModule,
    FormModule,
    ReactiveFormsModule,
    LanguageTranslationModule,
    CKEditorModule
  ]
})
export class SuscripcionModule { }
