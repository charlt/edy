import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraRoutingModule } from './carrera-routing.module';
import { CarreraComponent } from './carrera.component';
// import { SharedPipesModule } from '../../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';



@NgModule({
  declarations: [CarreraComponent],
  imports: [
    CommonModule,
    CarreraRoutingModule,
    // SharedPipesModule,
    FormsModule,
    ReactiveFormsModule,
    ConsultaAsignaturaModule,
    LanguageTranslationModule
  ]
})
export class CarreraModule { }
