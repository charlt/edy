import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerarPagoRoutingModule } from './generar-pago-routing.module';
import { GenerarPagoComponent } from './generar-pago.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'src/app/administracion/form/form.module';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [GenerarPagoComponent],
  imports: [
    CommonModule,
    GenerarPagoRoutingModule,
    FormModule,
    ReactiveFormsModule,
    LanguageTranslationModule
  ]
})
export class GenerarPagoModule { }
