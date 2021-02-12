import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainActividadComponent } from './main.component';
import { MainActividadRoutingModule } from './main-routing.module';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { RetroalimentacionModule } from 'src/app/docente/retroalimentacion/retroalimentacion.module';
import { ActividadModule } from '../actividad.module';
import { PortafolioEvidenciasModule } from '../portafolio-evidencias/portafolio-evidencias.module';
import { ContenidoModule } from '../contenido/contenido.module';
import { RubricaModule } from 'src/app/docente/rubrica/rubrica.module';

@NgModule({
  declarations: [MainActividadComponent],
  imports: [
    CommonModule,
    MainActividadRoutingModule,
    LanguageTranslationModule,
    RetroalimentacionModule,
    ActividadModule,
    PortafolioEvidenciasModule,
    ContenidoModule,
    RubricaModule
  ]
})
export class MainActividadModule { }
