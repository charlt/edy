import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { PageHeaderModule } from '../shared';
import { LayoutModule } from '../shared/modules/layout/layout.module';

@NgModule({
  declarations: [MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    PageHeaderModule,
    LayoutModule
  ]
})
export class MasterModule { }
