import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule,NgbTooltipModule,NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../../../components/header/header.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { BasicLoginModule } from 'src/app/components/basic-login/basic-login.module';
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';



@NgModule({
  declarations: [HeaderComponent,SidebarComponent],
  imports: [
    BasicLoginModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,NgbTooltipModule,NgbModalModule,
    LogotipoUsuarioModule
    

  ],
  exports:[
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
