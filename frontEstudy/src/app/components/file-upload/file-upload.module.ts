import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component'
import { ProgressComponent } from '../progress/progress.component'

@NgModule({
  declarations: [
      ProgressComponent,
      FileUploadComponent],
  imports:[
    CommonModule
  ],
  exports:[
    FileUploadComponent,ProgressComponent
  ]
})
export class FileUploadModule { }


  