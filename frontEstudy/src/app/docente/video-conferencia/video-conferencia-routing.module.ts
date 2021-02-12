import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { VideoConferenciaComponent } from './video-conferencia.component';
import { FormComponent } from './form/form.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';

const routes: Routes = [
  { path: '', 
    component: VideoConferenciaComponent, 
    children: [
      { path: '', redirectTo: 'consulta', pathMatch: 'full' },
      { path: 'consulta', component: ConsultaComponent },
      { path: 'nuevo', component: FormComponent },
      { path: 'editar/:id', component: FormComponent },
      { path: 'asistencia/:id', component: AsistenciaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoConferenciaRoutingModule { }
