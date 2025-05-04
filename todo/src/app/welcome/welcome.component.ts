import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { NgIf } from '@angular/common';
import { error } from 'console';
import e from 'express';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink,NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  
  userName = '';
  messageFromServer:String ='';
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userName = this.route.snapshot.params['userName']
  }

  getWelcomeMessage(){
    console.log(this.welcomeDataService.executeHelloWordBean());
    this.welcomeDataService.executeHelloWordBean().subscribe(
      response => this.handleSuccessMessage(response),
      error=> this.handleErrorMessage(error)
    );
    // console.log("get welcome message");
  }

  handleSuccessMessage(response:any){

    console.log(response,response.message);
    this.messageFromServer = response.message;
  }

  handleErrorMessage(error:any){

    // console.log(response,response.message);
    this.messageFromServer = error.error.message;
  }

}
