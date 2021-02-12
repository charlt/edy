import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './calendario.component';
// import { AngularCalendarYearViewModule } from 'angular-calendar-year-view';
// import { FullyearcalendarLibModule } from 'node_modules/fullyearcalendar-lib/';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    // AngularCalendarYearViewModule
    // FullyearcalendarLibModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [CalendarioComponent]
})
export class CalendarioModule { }
