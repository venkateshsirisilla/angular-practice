import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName: string, password: string) {
    console.log('Before Login', this.isUserLoggedIn());
    if (userName === 'venky' && password === 'venky') {
      sessionStorage.setItem('authenticatedUser', userName);
      console.log('After Login', this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}

