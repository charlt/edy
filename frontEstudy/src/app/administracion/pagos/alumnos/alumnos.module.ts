import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import {PagosAlumnosComponent } from './alumnos.component';
import { FormComponent } from './form/form.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { CargaLayoutPagosComponent } from './carga-layout-pagos/carga-layout-pagos.component';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';

@NgModule({
  declarations: [PagosAlumnosComponent,FormComponent,ConsultaComponent, CargaLayoutPagosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule,
    EncabezadoPersonaModule,
    FileUploadModule
  ]
})
export class PagosAlumnosModule { }
