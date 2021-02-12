import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminExpedienteRoutingModule } from './admin-expediente-routing.module';
import { AdminExpedienteComponent } from './admin-expediente.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [AdminExpedienteComponent, ConsultaComponent],
  imports: [
    CommonModule,
    AdminExpedienteRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AdminExpedienteModule { }
