import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaturaRoutingModule } from './asignatura-routing.module';
import { AsignaturaComponent } from './asignatura.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { SubirExcelComponent } from './subir-excel/subir-excel.component';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InstitucionModule } from 'src/app/shared/modules/institucion/institucion.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { EdicionModule } from './edicion/edicion.module';
import { SharedPipesModule } from 'src/app/shared';


@NgModule({
  declarations: [AsignaturaComponent, ConsultaComponent, SubirExcelComponent],
  imports: [
    CommonModule,
    AsignaturaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    InstitucionModule,
    CKEditorModule,
    EdicionModule,
    SharedPipesModule
  ]
})
export class AsignaturaModule { }
