import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionRoutingModule } from './facturacion-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {  FacturacionComponent} from './facturacion.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [FacturacionComponent, ConsultaComponent],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    LanguageTranslationModule,
    EncabezadoPersonaModule
  ]
})
export class FacturacionModule { }
