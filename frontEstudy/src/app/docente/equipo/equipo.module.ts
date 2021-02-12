import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo.component';
import { BuscadorPersonaModule} from '../../components/buscadorPersona/buscador-persona.module'

@NgModule({
  declarations: [EquipoComponent],
  imports: [
    CommonModule,
    BuscadorPersonaModule
  ],
  exports:[EquipoComponent]
})
export class EquipoModule { }
