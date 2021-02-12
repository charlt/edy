import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstrategicaComponent } from './estrategica.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EstrategicaModule.rootComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule
  ], 
  entryComponents: [  
    EstrategicaModule.rootComponent
  ]
  
})
export class EstrategicaModule { 
  static rootComponent = EstrategicaComponent;
}
