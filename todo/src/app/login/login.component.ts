import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent implements OnInit{
  userName = 'venky';
  password = 'venky';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private router: Router){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  handleLogin(){
    console.log('username:',this.userName);
    if(this.userName==='venky' && this.password==='venky'){
      this.router.navigate(['welcome',this.userName]);
      this.invalidLogin = false;;
    }else{
      this.invalidLogin = true;
    }
  }


}
