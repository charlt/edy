import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketsComponent } from './tickets.component';

@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TicketsComponent]
})
export class TicketsModule { }
