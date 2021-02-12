import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoFacilComponent } from './pago-facil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagoFacilComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PagoFacilComponent]
})
export class PagoFacilModule { }
