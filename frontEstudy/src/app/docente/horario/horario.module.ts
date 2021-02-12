import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { HorarioComponent } from './horario.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HorarioComponent],
  imports: [
    CommonModule,
    HorarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HorarioModule { }
