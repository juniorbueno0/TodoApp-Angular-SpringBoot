import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../intefaces/todo.interface';

@Injectable({providedIn: 'root'})
export class TodoService {
    private apiUrl:string = 'http://localhost:8080/api/todos';
    private apiUrlCompleted:string = 'http://localhost:8080/api/todos/completed';
    private apiUrlIncompleted:string = 'http://localhost:8080/api/todos/incompleted';

    constructor(private http: HttpClient) { }

    getTodosCompleted(): Observable<any> {
        return this.http.get(this.apiUrlCompleted);
    }

    getTodosIncompleted(): Observable<any> {
        return this.http.get(this.apiUrlIncompleted);
    }

    deleteTodoById(todo: Todo): Observable<any> {
        return this.http.delete(this.apiUrl +'/'+ todo.id);
    }

    createTodo(newTodo: Todo): Observable<any> {
        console.log(newTodo);
        return this.http.post(this.apiUrl, newTodo);
    }

    updateTodoById(newTodo:Todo, id:string): Observable<any> {
        console.log(this.apiUrl + '/' + id, newTodo);
        return this.http.put(this.apiUrl + '/' + id, newTodo);
    }

    getTodo(id: string): Observable<any> {
        return this.http.get(this.apiUrl +'/'+ id);
    }

    completeTodo(todo: Todo): Observable<any> {
        console.log(this.apiUrl + '/' + todo.id, todo);
        
        return this.http.put(this.apiUrl + '/' + todo.id, todo);
    }
    
}