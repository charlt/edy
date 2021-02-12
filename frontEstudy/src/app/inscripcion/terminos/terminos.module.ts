import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminosRoutingModule } from './terminos-routing.module';
import { TerminosComponent } from './terminos.component';
import { PlanEstudioModule } from 'src/app/components/plan-estudio/plan-estudio.module';

@NgModule({
  declarations: [TerminosComponent],
  imports: [
    CommonModule,
    TerminosRoutingModule,
    PlanEstudioModule
  ]
})
export class TerminosModule { }
