import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { UsuarioService } from '../services/usuario.service';
import { LanguageTranslationModule } from '../shared/modules/language-translation/language-translation.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResetPassModule } from '../reset-pass/reset-pass.module';
import { LogotipoUsuarioModule } from '../components/logotipo-usuario/logotipo-usuario.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LanguageTranslationModule,
        LoginRoutingModule,
        NgbModule,
        ResetPassModule,
        LogotipoUsuarioModule
        ],
    providers: [
        UsuarioService
        ],
    declarations: [LoginComponent]
})
export class LoginModule {}
