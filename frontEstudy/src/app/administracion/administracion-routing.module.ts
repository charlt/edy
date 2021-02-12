import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { PrivilegiosGuard} from '../shared';


const routes: Routes = [
    {
        path: '',
        component: AdministracionComponent,
        children: [
            //{ path: 'estadisticas', loadChildren: '../administracion/estadisticas/estadisticas.module#EstadisticasModule'},
            //{ path: 'documentos', loadChildren: '../administracion/documentos/documentos.module#DocumentosModule'},
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home',loadChildren: '../administracion/dashboard/dashboard.module#DashboardModule', canActivate: [PrivilegiosGuard] },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule', canActivate: [PrivilegiosGuard] },
            { path: 'forms', loadChildren: './form/form.module#FormModule', canActivate: [PrivilegiosGuard] },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule', canActivate: [PrivilegiosGuard] },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule', canActivate: [PrivilegiosGuard] },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule', canActivate: [PrivilegiosGuard] },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'},
            { path: 'carrera', loadChildren: '../administracion/carrera/carrera.module#CarreraModule', canActivate: [PrivilegiosGuard] },
            { path: 'plan-estudios', loadChildren: '../administracion/plan-estudios/plan-estudios.module#PlanEstudiosModule', canActivate: [PrivilegiosGuard] },
            { path: 'ciclo', loadChildren: '../administracion/ciclo/ciclo.module#CicloModule', canActivate: [PrivilegiosGuard] },
            { path: 'grupo', loadChildren: '../administracion/grupo/grupo.module#GrupoModule', canActivate: [PrivilegiosGuard] },
            { path: 'alumno', loadChildren: '../administracion/alumno/alumno.module#AlumnoModule'},
            { path: 'asignatura', loadChildren: '../administracion/asignatura/asignatura.module#AsignaturaModule', canActivate: [PrivilegiosGuard] },
            { path: 'perfil', loadChildren: '../master/perfil/perfil.module#PerfilModule'},
            { path: 'manejador-correo', loadChildren: '../administracion/manejador-correo/manejador-correo.module#ManejadorCorreoModule', canActivate: [PrivilegiosGuard] },
            { path: 'usuario', loadChildren: '../administracion/usuario/usuario.module#UsuarioModule', canActivate: [PrivilegiosGuard] },
            { path: 'carga', loadChildren: '../administracion/carga-actividades/carga-actividades.module#CargaActividadesModule', canActivate: [PrivilegiosGuard] },
            { path: 'rol', loadChildren: '../administracion/rol/rol.module#RolModule', canActivate: [PrivilegiosGuard] },
            { path: 'lista-correo', loadChildren: '../administracion/lista-correo/lista-correo.module#ListaCorreoModule', canActivate: [PrivilegiosGuard] },
            { path: 'privilegio', loadChildren: '../administracion/privilegios/privilegios.module#PrivilegiosModule', canActivate: [PrivilegiosGuard] },
            { path: 'institucion', loadChildren: '../administracion/institucion/institucion.module#InstitucionModule', canActivate: [PrivilegiosGuard] },
            { path: 'aspirante', loadChildren: '../administracion/aspirante/aspirante.module#AspiranteModule'},
            { path: 'rubricas', loadChildren: '../administracion/rubricas/rubricas.module#RubricasModule' },
            { path: 'pagos-alumno', loadChildren: '../administracion/pagos/alumnos/alumnos.module#PagosAlumnosModule' },
            { path: 'pagos', loadChildren: '../administracion/pagos/catalogo-pagos/catalogo-pagos.module#CatalogoPagosModule' },
            { path: 'suscripcion', loadChildren: '../administracion/pagos/suscripcion/suscripcion.module#SuscripcionModule' },
            { path: 'solicitud-pagos', loadChildren: '../administracion/pagos/solicitud/solicitud-pagos.module#SolicitudPagosModule' },
            { path: 'docente', loadChildren: '../administracion/docente/docente.module#DocenteModule'},
            { path: 'reportes', loadChildren: '../administracion/reportes/reportes.module#ReportesModule'},
            { path: 'encuesta', loadChildren: '../administracion/encuesta/encuesta.module#EncuestaModule'},
            { path: 'videoconferencia', loadChildren: './videoconferencia/videoconferencia.module#VideoconferenciaModule'},
            { path: 'migracion', loadChildren: './migracion/migracion.module#MigracionModule'},
            { path: 'expediente', loadChildren: './admin-expediente/admin-expediente.module#AdminExpedienteModule'},
            { path: 'tickets', loadChildren: './tickets/tickets.module#TicketsModule'},
            { path: 'avisos', loadChildren: './avisos-admin/avisos-admin.module#AvisosAdminModule'},
            { path: 'matriculacion/:id', loadChildren: './matriculacion/matriculacion.module#MatriculacionModule'},
            { path: 'descuentos', loadChildren: '../administracion/pagos/descuentos/descuentos.module#DescuentosModule' },
            { path: 'calendario', loadChildren: 'src/app/administracion/calendario/calendario.module#CalendarioModule'},
            { path: 'facturacion', loadChildren: '../administracion/facturacion/facturacion.module#FacturacionModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministracionRoutingModule {}