import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocenteComponent } from './docente.component';
import { AccesosComponent } from '../administracion/alumno/accesos/accesos.component';

const routes: Routes = [
  {
    path: '',
    component: DocenteComponent,
    children: [
      { path: 'accesos/:id', component: AccesosComponent },


        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        { path: 'home',loadChildren: '../docente/dashboard/dashboard.module#DashboardModule' },
        //{ path: 'asistencia',loadChildren: '../docente/asistencia/asistencia.module#AsistenciaModule' },
        { path: 'grupo/:id/:id2',loadChildren: '../docente/grupo/grupo.module#GrupoModule' },
        { path: 'calculo/:id1/:id2',  loadChildren: '../administracion/grupo/calculo-calificacion/calculo-calificacion.module#CalculoCalificacionModule' },
        { path: 'actividad/:id1/:id2',loadChildren: '../docente/actividad/actividad.module#ActividadDocenteModule' },
        { path: 'actividadSQA/:id1/:id2',loadChildren: '../docente/actividad-sqa/actividad-sqa.module#ActividadSQAModule' },
        { path: 'avisos/:id',loadChildren: '../docente/avisos-docente/avisos-docente.module#AvisosDocenteModule' },
        { path: 'notas/:id',loadChildren: '../docente/notas/notas.module#NotasModule' },
        { path: 'notas/:id/:id2',loadChildren: '../docente/notas/notas.module#NotasModule' },
        { path: 'retroalimentacion/:id/:id2',loadChildren: '../docente/retroalimentacion/retroalimentacion.module#RetroalimentacionModule' },
        { path: 'notas/:id/:id2',loadChildren: '../docente/notas/notas.module#NotasModule' },
        { path: 'perfil',loadChildren: '../master/perfil/perfil.module#PerfilModule'},
        { path: 'objetivos-actividad/:id',loadChildren: '../docente/objetivos-actividad/objetivos-actividad.module#ObjetivosActividadModule'},
        { path: 'correccion',loadChildren: '../docente/correccion/correccion.module#CorreccionModule' },
        { path: 'mensajeria/:id',loadChildren: '../docente/mensajeria/mensajeria.module#MensajeriaModule' },
        { path: 'auth/:id_a/:cv_g',loadChildren: '../docente/auth/auth.module#AuthModule'},
        { path: 'video-conferencia',loadChildren: '../docente/video-conferencia/video-conferencia.module#VideoConferenciaModule' },
        { path: 'bandeja-retro',loadChildren: '../docente/bandeja-retroalimentacion/bandeja-retroalimentacion.module#BandejaRetroalimentacionModule'},
        { path: 'bandeja-mensajes',loadChildren: '../docente/bandeja-mensajes/bandeja-mensajes.module#BandejaMensajesModule'},
        { path: 'modulosAsignaturaGrupo/:id',loadChildren: '../administracion/carga-actividades/asignatura/modulo/modulo.module#ModuloModule' },
        { path: 'contenido-asignatura/:id',loadChildren: '../administracion/carga-actividades/asignatura/asignatura.module#AsignaturaModule' },
        { path: 'seguimiento-examen/:id', loadChildren: '../docente/seguimiento-examen/seguimiento-examen.module#SeguimientoExamenModule'},
        { path: 'modulo/:id', loadChildren: '../administracion/carga-actividades/asignatura/modulo/modulo.module#ModuloModule' },
        { path: 'reportes/:id', loadChildren: '../docente/reportes/reportes.module#ReportesModule'},
        { path: 'asistencia-alumno/:id', loadChildren: '../docente/asistencia-alumno/asistencia-alumno.module#AsistenciaAlumnoModule'},
        { path: 'horario/:id', loadChildren: '../docente/horario/horario.module#HorarioModule'},
        { path: 'expediente', loadChildren: 'src/app/administracion/docente/expediente-docente/expediente-docente.module#ExpedienteDocenteModule'},
        { path: 'encuesta-docente/:id_ag', loadChildren: 'src/app/administracion/encuesta/encuesta.module#EncuestaModule'},
        { path: 'avisos', loadChildren: 'src/app/components/avisos/avisos.module#AvisosModule'},
        { path: 'tickets', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
        { path: 'tickets/:id', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
        { path: 'dashboard/:id', loadChildren: '../administracion/alumno/dashboard/dashboard.module#DashboardModule'}
        // { path: 'alumno/accesos/:id', loadChildren: '../administracion/alumno/alumno.module#AlumnoModule'},
      ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
