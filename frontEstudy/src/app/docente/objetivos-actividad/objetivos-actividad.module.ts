import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivosActividadRoutingModule } from './objetivos-actividad-routing.module';
import { ObjetivosActividadComponent } from './objetivos-actividad.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [ObjetivosActividadComponent],
  imports: [
    CommonModule,
    ObjetivosActividadRoutingModule,
    ChartsModule
  ],
  exports:[ObjetivosActividadComponent]
})
export class ObjetivosActividadModule { }
