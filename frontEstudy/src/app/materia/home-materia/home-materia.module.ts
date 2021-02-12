import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeMateriaRoutingModule } from './home-materia-routing.module';
import { HomeMateriaComponent } from './home-materia.component';
import { ObjetivosActividadModule } from 'src/app/docente/objetivos-actividad/objetivos-actividad.module';
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';



@NgModule({
  declarations: [HomeMateriaComponent],
  imports: [
    CommonModule,
    HomeMateriaRoutingModule,
    NgbModule,
    ObjetivosActividadModule,
    LogotipoUsuarioModule,
    ArchivoModule

  ], exports: [
    HomeMateriaComponent
  ]
})
export class HomeMateriaModule { }
