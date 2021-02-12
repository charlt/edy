import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorreccionRoutingModule } from './correccion-routing.module';
import { CorreccionComponent } from './correccion.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CorreccionComponent],
  imports: [
    CommonModule,
    CorreccionRoutingModule,
    CKEditorModule,
    FormsModule,
  ],
  exports: [CorreccionComponent]
})
export class CorreccionModule { }
