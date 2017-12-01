import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { RecaptchaModule } from 'ng2-recaptcha';
import { SocialLoginComponent } from './social-login/social-login.component';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { MapComponent } from './map/map.component';
import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-map/core';
import { AgmCoreModule } from '@agm/core';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { MapAutoCompleteComponent } from './map-auto-complete/map-auto-complete.component';
// import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { FormsModule} from '@angular/forms';
import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { ImgCropComponent } from './img-crop/img-crop.component';
import { TimePickerComponent } from './timePicker.component/timePicker.component';
import { DateService } from './services/date.service';
import { IsMobileService } from './services/isMobile.service';


@NgModule({
  declarations: [
    AppComponent,
    CaptchaComponent,
    SocialLoginComponent,
    MapComponent,
    PaymentGatewayComponent,
    MapAutoCompleteComponent,
    CalenderComponent,
    ImgCropComponent,
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RecaptchaModule.forRoot(),
    Angular2SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpeK73ftGidQIKGbIOKnhRbBDac3apKNA'
    }),
    FormsModule,
    FullCalendarModule
  ],
  providers: [DateService, IsMobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular2SocialLoginModule.loadProvidersScripts(providers);
