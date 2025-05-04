import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

class HelloWorldBean{
  constructor(private message: String){

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWordBean(){
    // let basicAuthHeader = this.createHttpHeaders();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeader
    // })
    return this.http.get<HelloWorldBean>("${API_URL}/helloWorld")
    // console.log("Hello how are you")
  }

  // createHttpHeaders(){
  //   let user = "venky";
  //   let password = "venky";
  //   let basicAuthHeader = "Basic "+ window.btoa(user +":"+password);
  //   return basicAuthHeader;
  // }
}
