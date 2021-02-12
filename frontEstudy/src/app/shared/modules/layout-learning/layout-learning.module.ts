import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule,NgbTooltipModule,NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../../learning/components/header/header.component';
import { SidebarComponent } from '../../../learning/components/sidebar/sidebar.component';
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';

@NgModule({
  declarations: [HeaderComponent,SidebarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,NgbTooltipModule,NgbModalModule,
    LogotipoUsuarioModule,
    ArchivoModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutLearningModule { }
