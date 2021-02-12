import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivoComponent } from './archivo.component'


@NgModule({
  declarations: [ArchivoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ArchivoComponent
  ]
})
export class ArchivoModule { }
