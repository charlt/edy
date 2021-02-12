import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetroalimentacionRoutingModule } from './retroalimentacion-routing.module';
import { RetroalimentacionComponent } from './retroalimentacion.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Autosize } from 'ng-autosize';
import {AutosizeModule} from 'ngx-autosize';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';

@NgModule({
  declarations: [RetroalimentacionComponent],
  imports: [
    CommonModule,
    RetroalimentacionRoutingModule,
    CKEditorModule,
    FormsModule,
    AutosizeModule,
    FileUploadModule,
    ReactiveFormsModule,
    ArchivoModule
  ],
  exports: [RetroalimentacionComponent]

})
export class RetroalimentacionModule { }
