import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotasComponent],
  imports: [
    CommonModule,
    NotasRoutingModule,
    CKEditorModule,
    FormsModule,
  ],
  exports: [NotasComponent]
})
export class NotasModule { }
