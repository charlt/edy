import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormAsignaturaComponent } from 'src/app/administracion/asignatura/form/form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // exports:[
  //   FormAsignaturaComponent,
    
  // ]
})
export class InstitucionModule { }
