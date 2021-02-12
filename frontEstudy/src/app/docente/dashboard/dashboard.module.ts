import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';


@NgModule({
  declarations: 
  [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LanguageTranslationModule
  ]
})
export class DashboardModule { }
