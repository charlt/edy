import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorComponent } from './asesor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscadorPersonaModule } from 'src/app/components/buscadorPersona/buscador-persona.module';

@NgModule({
  declarations: [AsesorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BuscadorPersonaModule
  ],
  exports: [AsesorComponent]
})
export class AsesorModule { }
