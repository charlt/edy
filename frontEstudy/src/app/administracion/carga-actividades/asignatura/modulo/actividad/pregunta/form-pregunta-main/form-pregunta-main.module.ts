import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPreguntaMainComponent } from './form-pregunta-main.component';
import { FormDatosPreguntaComponent } from '../form-datos-pregunta/form-datos-pregunta.component';
import { FormPreguntaComponent } from '../form-pregunta/form-pregunta.component';
import { FormMultipleComponent } from '../form-multiple/form-multiple.component';
import { FormRelacionComponent } from '../form-relacion/form-relacion.component';
import { FormZonaImagenesComponent } from '../form-zona-imagenes/form-zona-imagenes.component';
import { FormArrastableComponent } from '../form-arrastable/form-arrastable.component';
import { MultipleTextoComponent } from '../form-multiple/texto/texto.component';
import { ImagenComponent } from '../form-multiple/imagen/imagen.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormPreguntaMainRoutingModule } from './form-pregunta-main-routing.module';

@NgModule({
  declarations: [
    FormPreguntaMainComponent,  
    FormDatosPreguntaComponent,
    FormPreguntaComponent,
    FormMultipleComponent,
    FormRelacionComponent,
    FormZonaImagenesComponent,
    FormArrastableComponent,
    MultipleTextoComponent,
    ImagenComponent],
  imports: [
    CommonModule,
    FormPreguntaMainRoutingModule,
    DragDropModule,
    NgbModule,
    FileUploadModule,
    ArchivoModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule
  ]
})
export class FormPreguntaMainModule { }
