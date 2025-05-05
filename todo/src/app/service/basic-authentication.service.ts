import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient ) { }

  // authenticate(userName: string, password: string) {
  //   console.log('Before Login', this.isUserLoggedIn());
    

  //   if (userName === 'venky' && password === 'venky') {
  //     sessionStorage.setItem('authenticatedUser', userName);
  //     console.log('After Login', this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  isUserLoggedInWithToken() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }

  getAutheticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(){
    if(this.getAutheticatedUser()){
      return sessionStorage.getItem('token');
    }
    return sessionStorage.getItem('token');
  }

  executeBasicAuthenticationService(userName: string, password: string){
    // let basicAuthHeader = this.createHttpHeaders();
    let basicAuthHeader = "Basic "+ window.btoa(userName +":"+password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeader
    })
    return this.http.get<AuthenticationBean>("${API_URL}/basicAuth",{headers})
    .pipe(map(
      data=>{
        sessionStorage.setItem('authenticatedUser', userName);
        sessionStorage.setItem('token', basicAuthHeader);
        return data;
      }
    ))
    // console.log("Hello how are you")
  }


  executeJWTAuthenticationService(username: string, password: string){
    // let basicAuthHeader = this.createHttpHeaders();
    // let basicAuthHeader = "Basic "+ window.btoa(userName +":"+password);
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeader
    // })
    return this.http.post<any>(`${API_URL}/authenticate`,{username,
      password
    })
    .pipe(map(
      data=>{
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('token',`Bearer ${data.token}`);
        return data;
      }
    ))
    // console.log("Hello how are you")
  }


  // createHttpHeaders(){
  //   let user = "venky";
  //   let password = "venky";
  //   let basicAuthHeader = "Basic "+ window.btoa(user +":"+password);
  //   return basicAuthHeader;
  // }
}


export class AuthenticationBean{
  constructor(private message: String){

  }
}