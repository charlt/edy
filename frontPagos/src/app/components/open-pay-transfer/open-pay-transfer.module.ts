import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenPayTransferComponent } from './open-pay-transfer.component';

@NgModule({
  declarations: [OpenPayTransferComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OpenPayTransferModule { }
