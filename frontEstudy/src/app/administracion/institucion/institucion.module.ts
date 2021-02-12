import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InstitucionRoutingModule } from './institucion-routing.module';
import { InstitucionComponent } from '../institucion/institucion.component';
import { FormInstitucionComponent } from './form-institucion/form-institucion.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FileUploadModule } from '../../components/file-upload/file-upload.module';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';



@NgModule({
  declarations: [InstitucionComponent, FormInstitucionComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    InstitucionRoutingModule,
    NgxFileDropModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule
  ]
})
export class InstitucionModule { }
