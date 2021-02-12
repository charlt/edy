import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoconferenciaComponent } from './videoconferencia.component';
import { ConsultaComponent } from '../videoconferencia/consulta/consulta.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';

const routes: Routes = [
  {
    path: '',
    component: VideoconferenciaComponent,
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'asistencia/:id', component: AsistenciaComponent },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoconferenciaRoutingModule { }
