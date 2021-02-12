import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenPayComponent } from './open-pay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './numbers-only.directive';

@NgModule({
  declarations: [OpenPayComponent, NumberDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [OpenPayComponent]
})
export class OpenPayModule { }
