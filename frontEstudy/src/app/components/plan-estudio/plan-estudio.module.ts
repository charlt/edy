import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanEstudioComponent } from "./plan-estudio.component";

@NgModule({
  declarations: [PlanEstudioComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    PlanEstudioComponent
  ]
})
export class PlanEstudioModule { }
