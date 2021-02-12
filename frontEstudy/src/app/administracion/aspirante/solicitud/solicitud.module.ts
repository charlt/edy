import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudModule as _SolicitudModule } from "src/app/inscripcion/solicitud/solicitud.module";
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';

@NgModule({
  declarations: [SolicitudComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    _SolicitudModule,
    EncabezadoPersonaModule
  ]
})
export class SolicitudModule { }
