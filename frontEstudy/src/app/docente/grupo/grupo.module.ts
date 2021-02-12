import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { MensajeriaModule } from '../mensajeria/mensajeria.module';
import { SharedPipesModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [GrupoComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule,
    LanguageTranslationModule,
    ArchivoModule,
    EncabezadoPersonaModule,
    MensajeriaModule,
    SharedPipesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModule
  ],
  exports: [GrupoComponent]
})
export class GrupoModule { }
