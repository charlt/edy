import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaArchivosComponent } from './carga-archivos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { TranslateModule } from '@ngx-translate/core';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';

@NgModule({
  declarations: [CargaArchivosModule.rootComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    TranslateModule,
    ArchivoModule
  ],
  entryComponents: [  
    CargaArchivosModule.rootComponent
  ]
})
export class CargaArchivosModule { 
  static rootComponent = CargaArchivosComponent;
}
