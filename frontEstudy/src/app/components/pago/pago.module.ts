import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoComponent } from './pago.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { PagoRoutingModule } from './pago-routing.module';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from 'src/app/pipes/safe-url.pipe';

@NgModule({
  declarations: [PagoComponent, TransferenciaComponent, SafeUrlPipe],
  imports: [
    CommonModule,
    PagoRoutingModule,
    FileUploadModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PagoComponent
  ]
})
export class PagoModule { }
