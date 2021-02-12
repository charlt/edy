import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoPagosRoutingModule } from './catalogo-pagos-routing.module';
import { CatalogoPagosComponent } from './catalogo-pagos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormComponent } from './form/form.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [CatalogoPagosComponent,FormComponent,ConsultaComponent],
  imports: [
    CommonModule,
    CatalogoPagosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule
    
  ]
})
export class CatalogoPagosModule { }
