import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DocumentosComponent, ConsultaComponent],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [DocumentosComponent]
})
export class DocumentosModule { }
