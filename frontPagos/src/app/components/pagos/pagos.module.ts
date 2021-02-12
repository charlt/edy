import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosComponent } from './pagos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PagosComponent]
})
export class PagosModule { }
