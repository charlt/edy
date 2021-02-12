import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MigracionRoutingModule } from './migracion-routing.module';
import { MigracionComponent } from './migracion.component';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';

@NgModule({
  declarations: [MigracionComponent],
  imports: [
    CommonModule,
    MigracionRoutingModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MigracionModule { }