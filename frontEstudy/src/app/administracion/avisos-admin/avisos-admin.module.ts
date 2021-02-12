import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisosAdminRoutingModule } from './avisos-admin-routing.module';
import { AvisosAdminComponent } from './avisos-admin.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { SwitchComponent } from './switch/switch.component';
import { EncuestaModule } from '../encuesta/encuesta.module';
// import { FormSwitchModule } from 'src/app/components/form-switch/form-switch.module';

@NgModule({
  declarations: [AvisosAdminComponent, ConsultaComponent, NuevoComponent, SwitchComponent],
  imports: [
    CommonModule,
    AvisosAdminRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    ReactiveFormsModule,
    ArchivoModule,
    CKEditorModule,
    EncuestaModule
    // FormSwitchModule

  ]
})
export class AvisosAdminModule { }
