import { Component, OnInit } from '@angular/core';
import { Todo } from '../../intefaces/todo.interface';
import { TodoService } from '../../services/activity.services';

@Component({
  selector: 'todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent implements OnInit {
  activitiesCompleted: Todo[] = []

  constructor(private todoService: TodoService){}
  
  ngOnInit(): void {
    this.setTodosCompleted();
  }

  setTodosCompleted(){
    this.todoService.getTodosCompleted().subscribe(todos => {
      this.activitiesCompleted = todos;
    })
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodoById(todo).subscribe(todo => {
      // this.toastr.error('Todo Deleted!', `${todo.title} was deleted`);
    });
    window.location.reload();
  }
}
