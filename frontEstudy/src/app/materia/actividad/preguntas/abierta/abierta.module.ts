import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbiertaComponent } from './abierta.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AbiertaModule.rootComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule
  ],
  entryComponents: [  
    AbiertaModule.rootComponent
  ]
})
export class AbiertaModule {
  static rootComponent = AbiertaComponent;
}
