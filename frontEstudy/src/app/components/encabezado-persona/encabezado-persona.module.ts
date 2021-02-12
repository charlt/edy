import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoPersonaComponent } from './encabezado-persona.component';
import { LogotipoUsuarioModule } from '../logotipo-usuario/logotipo-usuario.module';

@NgModule({
  declarations: [EncabezadoPersonaComponent],
  imports: [
    CommonModule,
    LogotipoUsuarioModule
  ],
  exports: [EncabezadoPersonaComponent]

})
export class EncabezadoPersonaModule { }
