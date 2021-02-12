import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupAlumnoRoutingModule } from './signup-alumno-routing.module';
import { SignupAlumnoComponent } from './signup-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SignupAlumnoComponent],
  imports: [
    CommonModule,
    SignupAlumnoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ], 
  exports: [SignupAlumnoComponent]
})
export class SignupAlumnoModule { }
