import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialComponent } from './historial.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HistorialComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[HistorialComponent]
})
export class HistorialModule { }
