import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ActividadComponent } from './actividad.component';
import { AbiertaComponent } from './preguntas/abierta/abierta.component';
import { CKEditorModule  } from 'ckeditor4-angular';
import { OpcionMultipleComponent } from './preguntas/opcion-multiple/opcion-multiple.component';
import { RelacionColumnasComponent } from './preguntas/relacion-columnas/relacion-columnas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { CargaArchivosComponent } from './preguntas/carga-archivos/carga-archivos.component';
import { DragDropComponent } from './preguntas/drag-drop/drag-drop.component'
import { ArchivoModule } from '../../components/archivo/archivo.module'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DragDropModule as DragAndDropModule} from './preguntas/drag-drop/drag-drop.module';

import { ZonaImagenesComponent } from './preguntas/zona-imagenes/zona-imagenes.component';
import { VinculacionIdeasComponent } from './preguntas/vinculacion-ideas/vinculacion-ideas.component';
import { TablaComponent } from './preguntas/vinculacion-ideas/tabla/tabla.component';
import { DiagramaComponent } from './preguntas/vinculacion-ideas/diagrama/diagrama.component';
import { EstrategicaComponent } from './preguntas/estrategica/estrategica.component';
import { ForoComponent } from './preguntas/foro/foro.component';

import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperModule} from '../../components/stepper/stepper.module';
import { FileUploadModule } from 'src/app/components/file-upload/file-upload.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { LogotipoUsuarioModule } from 'src/app/components/logotipo-usuario/logotipo-usuario.module';
import { DiagnosticaComponent } from './preguntas/diagnostica/diagnostica.component';
import { BlockCopyPasteDirective } from 'src/app/directive/block-copy-paste.directive';
import { ModuleLoadDirective } from 'src/app/module-load/module-load.directive';
import { AbiertaModule } from './preguntas/abierta/abierta.module';
import { OpcionMultipleModule } from './preguntas/opcion-multiple/opcion-multiple.module';
import { RelacionColumnasModule } from './preguntas/relacion-columnas/relacion-columnas.module';
import { ZonaImagenesModule } from './preguntas/zona-imagenes/zona-imagenes.module';
import { VinculacionIdeasModule } from './preguntas/vinculacion-ideas/vinculacion-ideas.module';
import { ForoModule } from './preguntas/foro/foro.module';
import { CargaArchivosModule } from './preguntas/carga-archivos/carga-archivos.module';
import { EstrategicaModule } from './preguntas/estrategica/estrategica.module';
import { ActividadRoutingModule } from './actividad-routing.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/modulo/', '.json');
}

@NgModule({
  declarations: [
     ActividadComponent,
    // AbiertaComponent, 
    // OpcionMultipleComponent, 
    // RelacionColumnasComponent, 
    PreguntasComponent, 
    // CargaArchivosComponent, 
    // DragDropComponent,
    // ZonaImagenesComponent,
    DiagnosticaComponent,
    // VinculacionIdeasComponent,
    // TablaComponent,
    // DiagramaComponent,
    // EstrategicaComponent,
    // ForoComponent,
    BlockCopyPasteDirective,
    ModuleLoadDirective
    ],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    // CKEditorModule,
    // DragDropModule,
    FormsModule,
    ArchivoModule,
    // ReactiveFormsModule,
    // CdkStepperModule,
    // StepperModule,
    // FileUploadModule,
    // LogotipoUsuarioModule,
  ],
  exports: [
    ActividadComponent,
    // AbiertaComponent, 
    // OpcionMultipleComponent, 
    // RelacionColumnasComponent, 
    // PreguntasComponent, 
    // CargaArchivosComponent, 
    // DragDropComponent,
    // DiagnosticaComponent,
    // VinculacionIdeasComponent
  ], 
  providers: [
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
  ]
})
export class ActividadModule { }
