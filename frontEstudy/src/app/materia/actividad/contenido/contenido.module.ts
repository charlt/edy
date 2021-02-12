import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido.component';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';

@NgModule({
  declarations: [ContenidoComponent],
  imports: [
    CommonModule,
    ArchivoModule
  ],
  exports: [
    ContenidoComponent
  ]
})
export class ContenidoModule { }
