import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit{
  errorMessage = 'Some Error occurred , Please contact support '
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
