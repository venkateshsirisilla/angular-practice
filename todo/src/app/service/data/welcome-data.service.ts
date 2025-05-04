import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>("http://localhost:8080/helloWorld")
    // console.log("Hello how are you")
  }
}
