import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorBasicAuthService } from './service/basiAuth/http-interceptor-basic-auth.service';


export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule, FormsModule), provideRouter(routes), 
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true },
    provideClientHydration(withEventReplay()),provideHttpClient(withInterceptorsFromDi())]
};
