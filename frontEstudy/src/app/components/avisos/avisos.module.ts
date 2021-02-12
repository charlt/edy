import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisosRoutingModule } from './avisos-routing.module';
import { AvisosComponent } from './avisos.component';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';


@NgModule({
  declarations: [AvisosComponent],
  imports: [
    CommonModule,
    AvisosRoutingModule,
    ArchivoModule,
  ],
  exports:[AvisosComponent]
})
export class AvisosModule { }
