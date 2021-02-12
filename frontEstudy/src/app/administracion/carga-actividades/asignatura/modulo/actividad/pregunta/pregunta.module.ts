import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntaRoutingModule } from './pregunta-routing.module';
import { PreguntaComponent } from './pregunta.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [PreguntaComponent],
  imports: [
    CommonModule,
    PreguntaRoutingModule,
    CKEditorModule
  ]
})
export class PreguntaModule { }
