import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, HomeGuard, MateriaGuard, LoginGuard } from './shared';

const routes: Routes = [
    { path: 'admin', loadChildren: './administracion/administracion.module#AdministracionModule', canActivate: [AuthGuard] },
    { path: 'learning', loadChildren: './learning/learning.module#LearningModule', canActivate: [AuthGuard] },
    { path: 'materia', loadChildren: './materia/materia.module#MateriaModule', canActivate: [MateriaGuard]},
    { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [LoginGuard]},
    { path: 'seleccionMateria', loadChildren: './materia/seleccion-materia/seleccion-materia.module#SeleccionMateriaModule' },
    { path: 'inscribete/:id', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'inscribete', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' }, 
    { path: 'docente', loadChildren: './docente/docente.module#DocenteModule' , canActivate: [AuthGuard]  },       
    { path: 'master', loadChildren: './master/master.module#MasterModule'},       
    //{ path: 'asistencia', loadChildren: './docente/asistencia/asistencia.module#AsistenciaModule'  },
    { path: 'inscripcion', loadChildren: './inscripcion/inscripcion.module#InscripcionModule', canActivate: [AuthGuard]},
    { path: '', loadChildren: './login/login.module#LoginModule'  , canActivate: [HomeGuard] },
    { path: 'reset-pass', loadChildren: './reset-pass/reset-pass.module#ResetPassModule' },
    { path: 'registro-alumno', loadChildren: './signup-alumno/signup-alumno.module#SignupAlumnoModule' },
    { path: 'video-conferencia',loadChildren: './components/video-conferencia/video-conferencia.module#VideoConferenciaModule'},
    { path: 'asesor', loadChildren: './asesor/asesor.module#AsesorModule', canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
