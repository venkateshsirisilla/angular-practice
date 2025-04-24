import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  
  userName = '';
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userName = this.route.snapshot.params['userName']
  }

}
