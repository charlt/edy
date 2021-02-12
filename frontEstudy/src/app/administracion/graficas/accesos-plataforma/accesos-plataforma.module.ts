import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesosPlataformaComponent } from './accesos-plataforma.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AccesosPlataformaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [AccesosPlataformaComponent]
})
export class AccesosPlataformaModule { }
