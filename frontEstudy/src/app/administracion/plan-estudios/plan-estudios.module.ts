import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanEstudiosRoutingModule } from './plan-estudios-routing.module';
import { PlanEstudiosComponent } from './plan-estudios.component';
import { SharedPipesModule } from '../../shared';
import { ConsultaComponent } from './consulta/consulta.component';
import { NuevoComponent } from './nuevo/nuevo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import { InstitucionModule } from 'src/app/shared/modules/institucion/institucion.module';
import { FormOrdenJerarquicoComponent } from './form-orden-jerarquico/form-orden-jerarquico.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormDescripcionComponent } from '../asignatura/form-descripcion/form-descripcion.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { CargaImagenComponent } from '../asignatura/carga-imagen/carga-imagen.component';
import { EdicionModule } from '../asignatura/edicion/edicion.module';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';


@NgModule({
  declarations: [
    PlanEstudiosComponent,
    ConsultaComponent,
    NuevoComponent,
    VistaGeneralComponent,
    NuevoComponent,
    FormOrdenJerarquicoComponent,
    // FormDescripcionComponent,
    // CargaImagenComponent  
  ],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    PlanEstudiosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    InstitucionModule,
    NgbModule,
    CKEditorModule,
    NgxFileDropModule,
    EdicionModule,
    ConsultaAsignaturaModule
  ]
})
export class PlanEstudiosModule { }
