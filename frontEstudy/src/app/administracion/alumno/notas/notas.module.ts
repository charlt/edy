import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotasComponent } from './notas.component';

@NgModule({
  declarations: [NotasComponent],
  imports: [
    CommonModule
  ],
  exports: [NotasComponent]
})
export class NotasModule { }
