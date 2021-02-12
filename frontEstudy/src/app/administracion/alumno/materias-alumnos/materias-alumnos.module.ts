import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasAlumnosRoutingModule } from './materias-alumnos-routing.module';
import { MateriasAlumnosComponent } from './materias-alumnos.component';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MateriasAlumnosComponent],
  imports: [
    CommonModule,
    MateriasAlumnosRoutingModule,
    EncabezadoPersonaModule,
    ConsultaAsignaturaModule,
    FormsModule
  ]
})
export class MateriasAlumnosModule { }
