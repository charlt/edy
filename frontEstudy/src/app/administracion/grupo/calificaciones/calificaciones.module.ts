import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalificacionesRoutingModule } from './calificaciones-routing.module';
import { CalificacionesComponent } from './calificaciones.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedPipesModule } from 'src/app/shared';
import { GrupoModule } from 'src/app/docente/grupo/grupo.module';

@NgModule({
  declarations: [CalificacionesComponent],
  imports: [
    CommonModule,
    CalificacionesRoutingModule,
    TranslateModule,
    SharedPipesModule,
    GrupoModule
  ],
  exports: [CalificacionesComponent]
})
export class CalificacionesModule { }
