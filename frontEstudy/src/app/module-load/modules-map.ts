import { InjectionToken } from '@angular/core';

export type LAZY_DYNAMIC_MODULES = {
  abiertaModule: string,
  opcionMultipleModule: string,
  relacionColumnasModule: string,
  zonaImagenesModule: string,
  dragDropModule: string,
  vinculacionIdeasModule: string,
  foroModule: string,
  estrategicaModule: string,
  // diagnosticaModule: string,
  cargaArchivosModule: string;
};

export const lazyDynamicMap: LAZY_DYNAMIC_MODULES = {
  abiertaModule: 'src/app/materia/actividad/preguntas/abierta/abierta.module#AbiertaModule',
  opcionMultipleModule: 'src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.module#OpcionMultipleModule',
  relacionColumnasModule: 'src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.module#RelacionColumnasModule',
  zonaImagenesModule: 'src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.module#ZonaImagenesModule',
  dragDropModule: 'src/app/materia/actividad/preguntas/drag-drop/drag-drop.module#DragDropModule',
  vinculacionIdeasModule: 'src/app/materia/actividad/preguntas/vinculacion-ideas/vinculacion-ideas.module#VinculacionIdeasModule',
  foroModule: "src/app/materia/actividad/preguntas/foro/foro.module#ForoModule",
  estrategicaModule: "src/app/materia/actividad/preguntas/estrategica/estrategica.module#EstrategicaModule",
  // diagnosticaModule: "src/app/materia/actividad/preguntas/diagnostica/diagnostica.module#DiagnosticaModule",
  cargaArchivosModule: "src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.module#CargaArchivosModule"
};

export const LAZY_DYNAMIC_MODULES_MAP = new InjectionToken('LAZY_DYNAMIC_MODULES_MAP', {  
  factory: () => lazyDynamicMap
});