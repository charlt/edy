import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadDocenteComponent } from './actividad.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { RetroalimentacionModule } from '../retroalimentacion/retroalimentacion.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { NotasModule } from '../notas/notas.module';
import { ActividadModule } from 'src/app/materia/actividad/actividad.module';
import { PortafolioEvidenciasModule } from 'src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { CorreccionModule } from '../correccion/correccion.module';
import { CalculadoraPromediosComponent } from '../calculadora-promedios/calculadora-promedios.component';
import { EquipoModule } from '../equipo/equipo.module';
import { RubricaModule } from '../rubrica/rubrica.module';
//import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { ContenidoModule } from 'src/app/materia/actividad/contenido/contenido.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
})
export class AppModule { }

@NgModule({
  declarations: 
  [ActividadDocenteComponent,CalculadoraPromediosComponent],
  imports: [
    CommonModule,
    ActividadModule,
    ActividadRoutingModule,
    LanguageTranslationModule,
    RetroalimentacionModule,
    NotasModule,
    CKEditorModule,
    FormsModule,
    PortafolioEvidenciasModule,
    EncabezadoPersonaModule,
    CorreccionModule,
    EquipoModule,
    RubricaModule,
    //DragDropModule,
    ContenidoModule
  ]
})
export class ActividadDocenteModule { }
