import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { AlumnoComponent } from './alumno.component';
import { SharedPipesModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscadorPersonaModule } from 'src/app/components/buscadorPersona/buscador-persona.module';
import { PersonaModule } from 'src/app/components/persona/persona.module';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { FormComponent } from './form/form.component';
import { ExpedienteModule } from 'src/app/learning/expediente/expediente.module';
// import { AccesosComponent } from './accesos/accesos.component';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
// import { AccesosPersonaModule } from 'src/app/components/accesos-persona/accesos-persona.module';
import { ConsultaTicketsAlumnoComponent } from './consulta-tickets-alumno/consulta-tickets-alumno.component';
import { HistorialModule as HistorialAlumnoModule } from './historial/historial.module';
import { TicketsAlumnoModule } from './tickets-alumno/tickets-alumno.module';
// import { NotasComponent } from './notas/notas.component';
import { NotasModule } from './notas/notas.module';
import { AccesosModule } from './accesos/accesos.module';
import { PendientesComponent } from './pendientes/pendientes.component';
//import { MatStepperModule } from '@angular/material';

@NgModule({
  declarations: [ConsultaComponent, AlumnoComponent, FormComponent, ConsultaTicketsAlumnoComponent, PendientesComponent],
  imports: [
    //CdkStepperModule, 
    //MatStepperModule,                       
    CommonModule,
    BuscadorPersonaModule,
    PersonaModule,
    AlumnoRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    NgbModule,
    ConsultaAsignaturaModule,
    ExpedienteModule,
    EncabezadoPersonaModule,
    // AccesosPersonaModule,
    HistorialAlumnoModule,
    TicketsAlumnoModule,
    NotasModule,
    AccesosModule,
    NgbTabsetModule
  ]
})
export class AlumnoModule { }
