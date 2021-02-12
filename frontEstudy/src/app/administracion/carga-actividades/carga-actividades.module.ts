import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaActividadesRoutingModule } from './carga-actividades-routing.module';
import { CargaActividadesComponent } from './carga-actividades.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';



@NgModule({
  declarations: [
    CargaActividadesComponent,
  ],
  imports: [
    CommonModule,
    CargaActividadesRoutingModule,    
    NgbModule,
    LanguageTranslationModule,
    
  ]
})
export class CargaActividadesModule { }
