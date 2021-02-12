import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscripcionComponent } from './inscripcion.component';
import { LearningComponent } from './learning/learning.component';

const routes: Routes = [
  {
    path: '',
    component: InscripcionComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        { path: 'home',loadChildren: '../inscripcion/dashboard/dashboard.module#DashboardModule'},
        { path: 'solicitud',loadChildren: '../inscripcion/solicitud/solicitud.module#SolicitudModule'},
        { path: 'pagos',loadChildren: '../inscripcion/pagos/pagos.module#PagosModule'},
        { path: 'realizar-pago/:id', loadChildren: 'src/app/components/pago/pago.module#PagoModule' },
        { path: 'learning', component: LearningComponent },
        { path: 'terminos',loadChildren: '../inscripcion/terminos/terminos.module#TerminosModule'},
        { path: 'documentos',loadChildren: '../inscripcion/documentos/documentos.module#DocumentosModule'},
        { path: 'perfil',loadChildren: '../master/perfil/perfil.module#PerfilModule'},
        { path: 'tickets', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
        { path: 'tickets/:id', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule { }


