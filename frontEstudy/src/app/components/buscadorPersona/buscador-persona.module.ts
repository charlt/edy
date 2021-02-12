import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorPersonaComponent } from './buscador-persona.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuscadorPersonaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BuscadorPersonaComponent]
})
export class BuscadorPersonaModule { }
