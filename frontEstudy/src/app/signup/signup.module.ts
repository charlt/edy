import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
// import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaV3Module
    
  ],
  providers:[{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LdFAuIUAAAAAEGnhAqEmxbagK7tQ0ZhSLIBWFpM' },
],
  // providers: [{
  //   provide: RECAPTCHA_SETTINGS,
  //   useValue:{siteKey: '6LdFAuIUAAAAAEGnhAqEmxbagK7tQ0ZhSLIBWFpM',}as RecaptchaSettings,
  //   }],
  declarations: [SignupComponent]
})
export class SignupModule { }
