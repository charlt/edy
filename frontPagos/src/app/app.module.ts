import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OpenPayModule } from './components/open-pay/open-pay.module';
import { OpenPayTransferModule } from './components/open-pay-transfer/open-pay-transfer.module';
import { PagoFacilModule } from './components/pago-facil/pago-facil.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OpenPayModule,
    PagoFacilModule,
    OpenPayTransferModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
