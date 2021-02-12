import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleaverComponent } from './cleaver.component';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
  declarations: [CleaverComponent],
  imports: [
    CommonModule,
    EncabezadoPersonaModule,
    Ng2Charts
  ],
  exports: [CleaverComponent]
})
export class CleaverModule { }
