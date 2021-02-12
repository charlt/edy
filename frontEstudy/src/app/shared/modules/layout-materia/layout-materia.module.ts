import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule,NgbTooltipModule,NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../../materia/components/header/header.component';
import { SidebarComponent } from '../../../materia/components/sidebar/sidebar.component';
import { ArchivoModule } from '../../../components/archivo/archivo.module'
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';

@NgModule({
  declarations: [HeaderComponent,SidebarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,NgbTooltipModule,NgbModalModule,
    ArchivoModule,
    LogotipoUsuarioModule,
  ],
  exports:[
    HeaderComponent,
    SidebarComponent
   ]
})
export class LayoutMateriaModule { }
