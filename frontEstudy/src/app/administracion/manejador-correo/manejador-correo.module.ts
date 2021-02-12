import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManejadorCorreoRoutingModule } from './manejador-correo-routing.module';
import { ManejadorCorreoComponent } from './manejador-correo.component';
import { EditaCorreoComponent } from './edita-correo/edita-correo.component';

import { NuevoCorreoComponent } from './nuevo-correo/nuevo-correo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { SharedPipesModule } from '../../shared';
import { LayoutModule } from '../../shared/modules/layout/layout.module';
import { ArchivoModule } from '../../components/archivo/archivo.module';
import { CKEditorModule  } from 'ckeditor4-angular';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';

@NgModule({
  declarations: [ManejadorCorreoComponent, EditaCorreoComponent, NuevoCorreoComponent, ConsultaComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    ManejadorCorreoRoutingModule,
    FormsModule,
    ReactiveFormsModule,      
    CKEditorModule,
    SharedPipesModule,
    LayoutModule,
    ArchivoModule
  ]
})
export class ManejadorCorreoModule { }
