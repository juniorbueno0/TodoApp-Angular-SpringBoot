import { Component, OnInit } from '@angular/core';
import { Todo } from '../../intefaces/todo.interface';
import { TodoService } from '../../services/activity.services';
import { Router } from '@angular/router';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  activityList: Todo[] = [];
  

  constructor(private todoService:TodoService, private router: Router){}

  ngOnInit(): void {
    this.getTodosIncompleted();
  }


  getTodosIncompleted(){
    this.todoService.getTodosIncompleted().subscribe(todos => {
      this.activityList = todos;
    });
  }
  

  deleteTodo(todo: Todo){
    console.log('list',todo);
    
    this.todoService.deleteTodoById(todo).subscribe(product => {
      // this.toastr.error('Todo Deleted!', `${todo.title} was deleted`);
    });
    window.location.reload();
  }



  setToCompleted(activity: Todo){
    console.log(activity);
    
    const newActivity = {
      id:activity.id,
      title:activity.title,
      description: activity.description,
      completed: true
    }

    this.todoService.completeTodo(newActivity).subscribe(data => {
      console.log(data);
      window.location.reload();
    })
  }
}
