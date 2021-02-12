import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule,NgbTooltipModule,NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../../docente/components/header/header.component';
import { SidebarComponent } from '../../../docente/components/sidebar/sidebar.component';
import { ArchivoModule } from '../../../components/archivo/archivo.module'
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';
import { MensajeriaModule } from 'src/app/docente/mensajeria/mensajeria.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent,SidebarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,NgbTooltipModule,NgbModalModule,
    ArchivoModule,
    LogotipoUsuarioModule,
    MensajeriaModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent
   ]
})
export class LayoutDocenteModule { }
