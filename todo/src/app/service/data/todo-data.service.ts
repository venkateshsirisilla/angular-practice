import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveToDo(userName:String){
    return this.http.get<todo[]>(`http://localhost:8080/users/${userName}/todos`)
  }

  deleteTodoById(userName:String,id:Number){
    return this.http.delete(`http://localhost:8080/users/${userName}/todos/${id}`)
  }

  retrieveById(userName:String,id:Number){
    return this.http.get<todo>(`http://localhost:8080/users/${userName}/todos/${id}`)
  }

  updateById(userName:String,id:Number,todoDetails:todo){
    return this.http.put(`http://localhost:8080/users/${userName}/todos`,todoDetails)
  }

  addTodo(userName:String,id:Number,todoDetails:todo){
    return this.http.post(`http://localhost:8080/users/${userName}/todos`,todoDetails)
  }
}
