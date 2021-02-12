import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasExtrasRoutingModule } from './materias-extras-routing.module';
import { MateriasExtrasComponent } from './materias-extras.component';
import { ObjetivosActividadModule } from 'src/app/docente/objetivos-actividad/objetivos-actividad.module';

@NgModule({
  declarations: [MateriasExtrasComponent],
  imports: [
    CommonModule,
    MateriasExtrasRoutingModule,
    ObjetivosActividadModule
  ]
})
export class MateriasExtrasModule { }
