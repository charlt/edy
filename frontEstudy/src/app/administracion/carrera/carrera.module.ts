import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraRoutingModule } from './carrera-routing.module';
import { CarreraComponent } from './carrera.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './form-carrera/form-carrera.component';
import { FormCampusComponent } from './form-campus/form-campus.component';
import { CampusCarreraComponent } from './campus-carrera/campus-carrera.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [CarreraComponent, ConsultaComponent, FormComponent, FormCampusComponent, CampusCarreraComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    CarreraRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class CarreraModule { }
