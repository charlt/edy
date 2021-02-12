import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { PagosComponent } from './pagos.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [PagosComponent],
  imports: [
    CommonModule,
    PagosRoutingModule,
    LanguageTranslationModule
  ]
})
export class PagosModule { }
