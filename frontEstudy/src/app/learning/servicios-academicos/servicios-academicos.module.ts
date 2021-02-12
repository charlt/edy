import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosAcademicosRoutingModule } from './servicios-academicos-routing.module';
import { ServiciosAcademicosComponent } from './servicios-academicos.component';

@NgModule({
  declarations: [ServiciosAcademicosComponent],
  imports: [
    CommonModule,
    ServiciosAcademicosRoutingModule
  ]
})
export class ServiciosAcademicosModule { }
