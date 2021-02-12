import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesosComponent } from './accesos.component';
import { AccesosPersonaModule } from 'src/app/components/accesos-persona/accesos-persona.module';

@NgModule({
  declarations: [AccesosComponent],
  imports: [
    CommonModule,
    AccesosPersonaModule
  ],
  exports: [AccesosComponent]
})
export class AccesosModule { }
