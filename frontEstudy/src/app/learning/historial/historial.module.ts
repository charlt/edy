import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialRoutingModule } from './historial-routing.module';
import { HistorialComponent } from './historial.component';
import { HistorialModule as HistorialAlumnoModule } from 'src/app/administracion/alumno/historial/historial.module';


@NgModule({
  declarations: [HistorialComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    HistorialAlumnoModule
  ]
})
export class HistorialModule { }
