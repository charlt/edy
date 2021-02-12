import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './drag-drop.component';
import {DragDropModule as DragDrop} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DragDropModule.rootComponent],
  imports: [
    CommonModule,
    DragDrop
  ], 
  entryComponents: [  
    DragDropModule.rootComponent
  ]
})
export class DragDropModule { 
  static rootComponent = DragDropComponent
}
