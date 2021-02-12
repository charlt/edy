import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaAlumnoRoutingModule } from './asistencia-alumno-routing.module';
import { AsistenciaAlumnoComponent } from './asistencia-alumno.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedPipesModule } from '../../shared';

@NgModule({
  declarations: [AsistenciaAlumnoComponent],
  imports: [
    CommonModule,
    AsistenciaAlumnoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule
  ]
})
export class AsistenciaAlumnoModule { }
