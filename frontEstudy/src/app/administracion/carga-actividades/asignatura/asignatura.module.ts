import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturaComponent } from './asignatura.component';
import { AsignaturaRoutingModule } from './asignatura-routing.module';

@NgModule({
  declarations: [
    AsignaturaComponent
  ],
  imports: [
    CommonModule,
    AsignaturaRoutingModule
  ]
})
export class AsignaturaModule { }
