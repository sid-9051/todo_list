import { Component, OnInit } from '@angular/core';
// import { timeStamp } from 'console';
import { Todo } from "../../Todo"
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  localItem: string | null;
  todos!: Todo[];
  constructor() {
    this.localItem=localStorage.getItem("todos");
    if(this.localItem ==null){
      this.todos = []
    }
    else
    {
      this.todos=JSON.parse(this.localItem);
    }
    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo)
  {
    console.log(todo)
    const index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  addTodo(todo:Todo)
  {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggleTodo(todo:Todo)
  {
    const index= this.todos.indexOf(todo);
    this.todos[index].active=! this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
