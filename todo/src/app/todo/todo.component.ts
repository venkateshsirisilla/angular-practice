import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { todo } from '../list-todos/list-todos.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id: any;
  todoData: any;
  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoData = new todo(this.id, '', true, new Date())
    if (this.id !== "-1") {
      this.todoDataService.retrieveById('venky', this.id).subscribe(
        data => this.todoData = data
      );
    } 
    // throw new Error('Method not implemented.');
  }


  updateTodo() {
    if (this.id === "-1") {
      this.todoDataService.addTodo('venky', this.id, this.todoData).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoDataService.updateById('venky', this.id, this.todoData).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }

  }
}
