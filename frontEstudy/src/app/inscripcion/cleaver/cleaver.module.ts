import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CleaverRoutingModule } from './cleaver-routing.module';
import { CleaverComponent } from './cleaver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CleaverComponent],
  imports: [
    CommonModule,
    CleaverRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CleaverComponent]
})
export class CleaverModule { }
