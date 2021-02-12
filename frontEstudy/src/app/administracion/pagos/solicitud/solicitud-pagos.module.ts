import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudPagosRoutingModule } from './solicitud-pagos.routing.module';
import { SolicitudPagosComponent} from './solicitud-pagos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageTranslationModule } from 'src/app/shared/modules/language-translation/language-translation.module';
import { BuscadorPersonaModule } from 'src/app/components/buscadorPersona/buscador-persona.module';
import { ArchivoModule } from 'src/app/components/archivo/archivo.module';

import { ConsultaComponent } from './consulta/consulta.component';
import { FormColegiaturaComponent } from './form-colegiatura/form-colegiatura.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormPagoComponent } from './form-pago/form-pago.component';
import { FormSolicitudComponent } from './form-solicitud/form-solicitud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SolicitudPagosComponent,FormPagoComponent,FormSolicitudComponent,FormProductoComponent,FormColegiaturaComponent, ConsultaComponent],
  imports: [
    CommonModule,
    SolicitudPagosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule,
    BuscadorPersonaModule,
    ArchivoModule,
    NgbModule
    
  ]
})
export class SolicitudPagosModule { }
