import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutDocenteModule } from '../shared/modules/layout-docente/layout-docente.module';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';

import { UsuarioService } from '../services/usuario.service';
import { PageHeaderModule } from '../shared';
import { AlumnoModule } from '../administracion/alumno/alumno.module';
// import { ObjetivosActividadComponent } from './objetivos-actividad/objetivos-actividad.component';

@NgModule({
  declarations: [DocenteComponent],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    PageHeaderModule,
    TranslateModule,
    LayoutDocenteModule,
    AlumnoModule
  ],
  providers: [
      UsuarioService
  ]
})
export class DocenteModule { }
