import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaComponent } from './consulta/consulta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { PageHeaderModule} from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { PersonaModule } from 'src/app/components/persona/persona.module';
import { EditaComponent } from './edita/edita.component';
import { RolesComponent } from './roles/roles.component';
import { PasswordModule } from 'src/app/components/password/password.module';
import { ConsultaAsignaturaModule } from 'src/app/components/consultaAsignatura/consulta-asignatura.module';
import { EditaRolUsuarioModule } from 'src/app/components/edita-rol-usuario/edita-rol-usuario.module';

@NgModule({
  declarations: [UsuarioComponent, ConsultaComponent, NuevoComponent, EditaComponent, RolesComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    UsuarioRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    PersonaModule,
    PasswordModule,
    ConsultaAsignaturaModule,
    EditaRolUsuarioModule
  ]
})
export class UsuarioModule { }
