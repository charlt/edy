import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { ActividadModule } from 'src/app/materia/actividad/actividad.module';
import { PortafolioEvidenciasModule } from 'src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module';
import { ContenidoModule } from 'src/app/materia/actividad/contenido/contenido.module';
import { VistaPreviaRoutingModule } from './vista-previa-routing.module';
import { VistaPreviaComponent } from './vista-previa.component';

@NgModule({
  declarations: [VistaPreviaComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    ActividadModule,
    PortafolioEvidenciasModule,
    ContenidoModule,
    VistaPreviaRoutingModule
  ]
  })
export class VistaPreviaModule {}
