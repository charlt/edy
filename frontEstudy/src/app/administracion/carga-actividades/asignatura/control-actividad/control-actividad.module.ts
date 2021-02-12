import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlActividadRoutingModule } from './control-actividad-routing.module';

import {FormsModule} from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ControlActividadComponent } from './control-actividad.component';

@NgModule({
  declarations: [ControlActividadComponent],  
  imports: [
    CommonModule,
    ControlActividadRoutingModule,
    FormsModule,
    LanguageTranslationModule,
  
  ]
})
export class ControlActividadModule { }
