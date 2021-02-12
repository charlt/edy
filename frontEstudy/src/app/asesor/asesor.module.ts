import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { UsuarioService } from '../services/usuario.service';
import { AsesorComponent } from './asesor.component';
import { PageHeaderModule } from '../shared';
import { LayoutAsesorModule } from '../shared/modules/layout-asesor/layout-asesor.module';

@NgModule({
  declarations: [AsesorComponent],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    PageHeaderModule,
    LayoutAsesorModule
  ],
  providers: [
    UsuarioService
  ]
})
export class AsesorModule { }
