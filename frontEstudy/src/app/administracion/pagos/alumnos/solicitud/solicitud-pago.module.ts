import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudComponent } from './solicitud.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [SolicitudComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    LanguageTranslationModule,
    EncabezadoPersonaModule
  ],
  exports:[
    SolicitudComponent
  ]
})
export class SolicitudModule { }
