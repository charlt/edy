import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdicionComponent } from './edicion.component';
import { CargaImagenComponent } from '../carga-imagen/carga-imagen.component';
import { FormAsignaturaComponent } from '../form/form.component';
import { FormDescripcionComponent } from '../form-descripcion/form-descripcion.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';



@NgModule({
  declarations: [EdicionComponent, CargaImagenComponent , FormAsignaturaComponent, FormDescripcionComponent],
  imports: [
    CommonModule,
    NgxFileDropModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    CKEditorModule,
    NgbModule,
    FileUploadModule,
    ArchivoModule
  ],
  exports: [EdicionComponent, FormAsignaturaComponent ]
})
export class EdicionModule { }
