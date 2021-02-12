import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AvisosDocenteRoutingModule } from './avisos-docente-routing.module';
import { AvisosDocenteComponent } from './avisos-docente.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { CKEditorModule  } from 'ckeditor4-angular';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { ArchivoModule } from '../../components/archivo/archivo.module'
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';




@NgModule({
  declarations: [AvisosDocenteComponent, ConsultaComponent, FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    AvisosDocenteRoutingModule,
    LanguageTranslationModule,
    ArchivoModule,
    FileUploadModule
    
  ]
})
export class AvisosDocenteModule { }
