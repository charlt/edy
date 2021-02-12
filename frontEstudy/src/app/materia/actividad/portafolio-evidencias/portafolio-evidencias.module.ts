import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortafolioEvidenciasComponent } from './portafolio-evidencias.component';
import { ArchivoModule } from '../../../components/archivo/archivo.module';

@NgModule({
  declarations: [PortafolioEvidenciasComponent],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule, 
    ReactiveFormsModule,
    FileUploadModule,
    ArchivoModule
  ],
  exports: [
    PortafolioEvidenciasComponent
  ]
})
export class PortafolioEvidenciasModule { }
