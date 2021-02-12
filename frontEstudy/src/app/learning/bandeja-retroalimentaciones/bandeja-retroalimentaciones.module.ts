import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejaRetroalimentacionesRoutingModule } from './bandeja-retroalimentaciones-routing.module';
import { BandejaRetroalimentacionesComponent } from './bandeja-retroalimentaciones.component';

@NgModule({
  declarations: [BandejaRetroalimentacionesComponent],
  imports: [
    CommonModule,
    BandejaRetroalimentacionesRoutingModule
  ],
  exports:[BandejaRetroalimentacionesComponent]
})
export class BandejaRetroalimentacionesModule { }
