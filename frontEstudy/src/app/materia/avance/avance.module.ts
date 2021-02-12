import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvanceRoutingModule } from './avance-routing.module';
import { AvanceComponent } from './avance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { EncabezadoPersonaModule } from 'src/app/components/encabezado-persona/encabezado-persona.module';
import { HistorialModule } from '../historial/historial.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';
import { FormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { SharedPipesModule } from 'src/app/shared';

@NgModule({
  declarations: [AvanceComponent],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    ArchivoModule,
    HistorialModule,
    SharedPipesModule,
    AvanceRoutingModule,
    RoundProgressModule,
    EncabezadoPersonaModule,
    LanguageTranslationModule,
  ]
})
export class AvanceModule { }
