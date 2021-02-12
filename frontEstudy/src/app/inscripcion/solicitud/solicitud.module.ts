import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudComponent } from './solicitud.component';
import { FormGeneratorComponent } from 'src/app/components/form-generator/form-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaModule } from 'src/app/components/persona/persona.module';
import { CleaverModule } from '../cleaver/cleaver.module';
import { AsesorModule } from './asesor/asesor.module';

@NgModule({
  declarations: [SolicitudComponent, FormGeneratorComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PersonaModule,
    CleaverModule,
    AsesorModule
  ],
  exports: [SolicitudComponent]
})
export class SolicitudModule { }
