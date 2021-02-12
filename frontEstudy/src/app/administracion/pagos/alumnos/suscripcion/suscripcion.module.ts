import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { SuscripcionComponent } from './suscripcion.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SuscripcionRoutingModule } from './suscripcion-routing.module';

@NgModule({
  declarations: [SuscripcionComponent],
  imports: [
    CommonModule,
    SuscripcionRoutingModule,
    EncabezadoPersonaModule,
    LanguageTranslationModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class SuscripcionModule { }
