import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    FileUploadModule,
    ReactiveFormsModule,
    FormsModule, 
    ArchivoModule,
    NgbCarouselModule,
    NgbTooltipModule
  ],
  exports: [DocumentosComponent]
})
export class DocumentosModule { }
