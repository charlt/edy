import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './consulta.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormModuloComponent } from '../form-modulo/form-modulo.component';

@NgModule({
  declarations: [ConsultaComponent,FormModuloComponent  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class ConsultaModule { }
