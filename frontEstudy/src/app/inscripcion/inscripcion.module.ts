import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { InscripcionComponent } from './inscripcion.component';
import { PageHeaderModule } from '../shared';
import { LayoutInscripcionModule } from '../shared/modules/layout-inscripcion/layout-inscripcion.module';
import { LearningComponent } from './learning/learning.component';

@NgModule({
  declarations: [InscripcionComponent,LearningComponent],
  imports: [
    CommonModule,
    InscripcionRoutingModule,
    LayoutInscripcionModule,
    PageHeaderModule
  ]
})
export class InscripcionModule { }
