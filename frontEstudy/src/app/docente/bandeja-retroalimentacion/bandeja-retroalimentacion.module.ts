import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejaRetroalimentacionRoutingModule } from './bandeja-retroalimentacion-routing.module';
import { BandejaRetroalimentacionComponent } from './bandeja-retroalimentacion.component';

@NgModule({
  declarations: [BandejaRetroalimentacionComponent],
  imports: [
    CommonModule,
    BandejaRetroalimentacionRoutingModule
  ]
})
export class BandejaRetroalimentacionModule { }
