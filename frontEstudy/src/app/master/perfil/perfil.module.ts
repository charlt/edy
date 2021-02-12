import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { PageHeaderModule} from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';
import { FileUploadModule }from 'src/app/components/file-upload/file-upload.module'
import { PasswordModule } from 'src/app/components/password/password.module';

@NgModule({
  declarations: [PerfilComponent, MisDatosComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    PerfilRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,  
    NgxFileDropModule,
    LogotipoUsuarioModule,
    FileUploadModule,
    PasswordModule
  ]
})
export class PerfilModule { }
