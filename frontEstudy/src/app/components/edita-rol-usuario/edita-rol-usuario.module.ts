import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditaRolUsuarioComponent } from './edita-rol-usuario.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ConsultaAsignaturaModule } from '../consultaAsignatura/consulta-asignatura.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditaRolUsuarioComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    ConsultaAsignaturaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    EditaRolUsuarioComponent
  ]
})
export class EditaRolUsuarioModule { }