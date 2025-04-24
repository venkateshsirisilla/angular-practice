import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent implements OnInit {
  userName = 'venky';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  handleLogin() {
    console.log('username:', this.userName);
    // if(this.userName==='venky' && this.password==='venky'){
    if (this.hardcodedAuthenticationService.authenticate(this.userName, this.password)) {
      this.router.navigate(['welcome', this.userName]);
      this.invalidLogin = false;;
    } else {
      this.invalidLogin = true;
    }
  }


}
