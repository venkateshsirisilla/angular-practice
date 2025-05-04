import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, RouterLink } from '@angular/router';

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
  imports: [NgFor,DatePipe,NgIf],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
  todos :any
  message:String='';

  constructor(private todoData: TodoDataService, private router: Router){

  }

  ngOnInit(): void {
    this.todoData.retrieveToDo('venky').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
    // throw new Error('Method not implemented.');
  }

  refreshTodos(){
    this.todoData.retrieveToDo('venky').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteById(id:Number){
    console.log(id)
    console.log(`Deleted by Id ${id}`);
    this.todoData.deleteTodoById('venky',id).subscribe(
      response=>{
        this.message = `Deleted record Successfully for id :${id}`;
        this.refreshTodos();
      },
      error =>{
        this.message= `Failed to delete the record for id :${id}`
      }
      
    )
  }

  updateById(id:Number){
    // console.log(id)
    console.log(`updated by Id ${id}`);
    this.router.navigate(['todos', id]);
    // this.router.navigate(`todos/$(id)`)
    
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
