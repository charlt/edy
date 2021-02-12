import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/asesor/components/header/header.component';
import { SidebarComponent } from 'src/app/asesor/components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';
import { NgbDropdownModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,NgbTooltipModule,NgbModalModule,
    LogotipoUsuarioModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutAsesorModule { }
