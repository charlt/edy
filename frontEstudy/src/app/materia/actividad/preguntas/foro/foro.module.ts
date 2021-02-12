import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoComponent } from './foro.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';

@NgModule({
  declarations: [ForoModule.rootComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    LogotipoUsuarioModule,
    ArchivoModule
  ],
  entryComponents: [  
    ForoModule.rootComponent
  ]
})
export class ForoModule { 
  static rootComponent = ForoComponent;
}
