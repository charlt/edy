import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from '../shared/modules/layout/layout.module';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';

import { UsuarioService } from '../services/usuario.service';
import { PageHeaderModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        AdministracionRoutingModule,
        PageHeaderModule,
        TranslateModule,
        LayoutModule
    ],
    providers: [
        UsuarioService
    ],
    declarations: [AdministracionComponent]
})
export class AdministracionModule {}
