import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService){

  }
  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
    // throw new Error('Method not implemented.');
  }

}
