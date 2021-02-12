import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { RecaptchaModule } from 'ng-recaptcha';

import { HttpModule }   from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, HomeGuard } from './shared';
import { UsuarioService } from './services/usuario.service';

// import { FilterPipe } from './pipes/filter.pipe';

//Interceptor
import { JwtInterceptorService } from "./services/jwt-interceptor.service";
import { BasicLoginModule } from './components/basic-login/basic-login.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        BasicLoginModule,
        NgbModalModule,
        RecaptchaModule.forRoot(),
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        HomeGuard,
        UsuarioService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
