import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningComponent } from './learning.component';

const routes: Routes = [
  {
      path: '',
      component: LearningComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
          { path: 'home',loadChildren: './home-learning/home-learning.module#HomeLearningModule' },
          { path: 'materia',loadChildren: 'src/app/learning/materia/materia.module#MateriaModule' },
          { path: 'perfil', loadChildren: '../master/perfil/perfil.module#PerfilModule' },
          { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
          { path: 'auth/:id',loadChildren: './auth/auth.module#AuthModule'},
          { path: 'pagos', loadChildren: 'src/app/learning/pagos/pagos.module#PagosModule' },
          { path: 'realizar-pago/:id', loadChildren: 'src/app/components/pago/pago.module#PagoModule' },
          { path: 'biblioteca', loadChildren: './biblioteca/biblioteca.module#BibliotecaModule' },
          { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule'},
          { path: 'historial', loadChildren: './historial/historial.module#HistorialModule' },
          { path: 'expediente', loadChildren: './expediente/expediente.module#ExpedienteModule' },
          { path: 'serviciosAcademicos', loadChildren: './servicios-academicos/servicios-academicos.module#ServiciosAcademicosModule' },
          { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioModule'},
          { path: 'avisos/:id',loadChildren: '../components/avisos/avisos.module#AvisosModule'},
          { path: 'diploma', loadChildren: './diploma/diploma.module#DiplomaModule'},
          { path: 'solicitud', loadChildren: './solicitud/solicitud.module#SolicitudModule'},
          { path: 'encuesta/:id/:id2', loadChildren: 'src/app/components/encuestas/encuestas.module#EncuestasModule' },
          { path: 'tickets', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
          { path: 'tickets/:id', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
          { path: 'bandeja-retro/:id', loadChildren: 'src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.module#BandejaRetroalimentacionesModule'},
          { path: 'bandeja-mensajes', loadChildren: 'src/app/learning/bandeja-mensajes/bandeja-mensajes.module#BandejaMensajesModule'},
          { path: 'materias-extras', loadChildren: 'src/app/learning/materias-extras/materias-extras.module#MateriasExtrasModule'},
          { path: 'horario', loadChildren: 'src/app/learning/horario/horario.module#HorarioModule' },
          { path: 'avance', loadChildren: 'src/app/materia/avance/avance.module#AvanceModule'},
          { path: 'grabaciones', loadChildren: 'src/app/learning/videos-videoconferencia/videos-videoconferencia.module#VideosVideoconferenciaModule' }

        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class LearningRoutingModule { }

// C:\wamp64\www\estudy_new\frontEstudy\src\app\learning\consulta-videos-videoconferencia