import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtiquetasRoutingModule } from './etiquetas-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { EtiquetasComponent } from './etiquetas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EtiquetasComponent, ConsultaComponent],
  imports: [
    CommonModule,
    EtiquetasRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [EtiquetasComponent]
})
export class EtiquetasModule { }
