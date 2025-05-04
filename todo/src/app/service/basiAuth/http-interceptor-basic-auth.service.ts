import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService:BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // let user = "venky";
    // let password = "venky";
    // let basicAuthHeader = "Basic "+ window.btoa(user +":"+password);
    let basicAuthHeader = this.basicAuthService.getAuthenticatedToken();
    let userName = this.basicAuthService.getAutheticatedUser();
    if(basicAuthHeader && userName){
      req = req.clone({
        setHeaders:{
          Authorization: basicAuthHeader
        }
      })
    }
    
    return next.handle(req);
    // return basicAuthHeader;
    // thro/w new Error('Method not implemented.');
  }
}
