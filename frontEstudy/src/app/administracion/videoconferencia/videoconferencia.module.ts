import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoconferenciaRoutingModule } from './videoconferencia-routing.module';
import { VideoconferenciaComponent } from './videoconferencia.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from 'src/app/shared';
import { AsistenciaComponent } from './asistencia/asistencia.component';

@NgModule({
  declarations: [VideoconferenciaComponent, ConsultaComponent, AsistenciaComponent],
  imports: [
    CommonModule,
    VideoconferenciaRoutingModule,
    LanguageTranslationModule,
    FormsModule,
    SharedPipesModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class VideoconferenciaModule { }
