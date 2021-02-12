import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning.component';
import { LayoutLearningModule } from '../shared/modules/layout-learning/layout-learning.module';
import { PageHeaderModule } from '../shared';
import { SolicitudModule } from '../inscripcion/solicitud/solicitud.module';

@NgModule({
  declarations: [LearningComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    TranslateModule,
    LayoutLearningModule,
    PageHeaderModule,
    SolicitudModule
  ]
})
export class LearningModule { }