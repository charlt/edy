import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './calendario.component';
import { registerLocaleData } from '@angular/common';
import { CalendarioModule as CalendarioComponentModule } from "src/app/components/calendario/calendario.module";

import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-Ar');


@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    FormsModule,
    NgbModalModule,
    CalendarioComponentModule
  ]
})
export class CalendarioModule { }
