import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './calendario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaComponent } from './consulta/consulta.component';
import { CalendarioModule as CalendarioComponentModule } from 'src/app/components/calendario/calendario.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CalendarioComponent, ConsultaComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    ReactiveFormsModule,
    CalendarioComponentModule,
    TranslateModule
  ]
})
export class CalendarioModule { }
