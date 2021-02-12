import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudModule as SolicitudComponentModule } from "src/app/inscripcion/solicitud/solicitud.module";
import { SolicitudComponent } from './solicitud.component';

@NgModule({
  declarations: [SolicitudComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    SolicitudComponentModule
  ],
  exports: [SolicitudComponent]
})
export class SolicitudModule { }
