import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoConferenciaRoutingModule } from './video-conferencia-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormComponent } from './form/form.component';
import { VideoConferenciaComponent } from './video-conferencia.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CargaVideosModule } from '../carga-videos/carga-videos.module';
import { CalendarioModule as CalendarioComponentModule } from 'src/app/components/calendario/calendario.module';

@NgModule({
  declarations: [VideoConferenciaComponent, ConsultaComponent, FormComponent, AsistenciaComponent],
  imports: [
    CommonModule,
    VideoConferenciaRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CargaVideosModule,
    CalendarioComponentModule
  ]
})
export class VideoConferenciaModule { }
