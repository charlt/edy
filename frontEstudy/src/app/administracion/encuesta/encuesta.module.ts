import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestaRoutingModule } from './encuesta-routing.module';
import { EncuestaComponent } from './encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEncuestaComponent } from './form-encuesta/form-encuesta.component';
import { FormMainComponent } from './form-main/form-main.component';
import { FormPreguntasComponent } from './form-preguntas/form-preguntas.component';
import { FormReactivosComponent } from './form-reactivos/form-reactivos.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';

import { FormSwitchModule } from 'src/app/components/form-switch/form-switch.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [EncuestaComponent, FormEncuestaComponent, FormMainComponent, FormPreguntasComponent, FormReactivosComponent, FormSwitchComponent, EstadisticasComponent],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormSwitchModule,
    NgbModule,
    LanguageTranslationModule,
    ChartsModule
  ],
  exports:[
   FormSwitchComponent 
  ]
})
export class EncuestaModule { }
