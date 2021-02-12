import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormActividadRoutingModule } from './form-actividad-routing.module';
import { FormActividadComponent } from './form-actividad.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FormActividadComponent ],
  imports: [
    CommonModule,
    FormActividadRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    ArchivoModule,
    NgbModule,
    CKEditorModule
]
})
export class FormActividadModule { }
