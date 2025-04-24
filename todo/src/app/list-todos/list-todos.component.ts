import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export class todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  imports: [NgFor,DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
  todos = [
    new todo(1,'learn to dance',true, new Date()),
    new todo(2,'dance to learn',true, new Date()),
    new todo(3,'become an expert in angular',true, new Date()),
    new todo(4,'expert in java',true, new Date())
  ]

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
