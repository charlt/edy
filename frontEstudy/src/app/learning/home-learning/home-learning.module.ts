import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPipesModule, StatModule } from '../../shared';

import { HomeLearningRoutingModule } from './home-learning-routing.module';
import { HomeLearningComponent } from './home-learning.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeLearningComponent],
  imports: [
    CommonModule,
    HomeLearningRoutingModule,
    SharedPipesModule,
    NgbCarouselModule,
    StatModule,
    NgbModule
  ]
})
export class HomeLearningModule { }
