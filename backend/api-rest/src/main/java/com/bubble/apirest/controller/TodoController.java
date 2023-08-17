package com.bubble.apirest.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bubble.apirest.TodoService;
import com.bubble.apirest.model.Todo;

@RestController
@RequestMapping("api/todos")
@CrossOrigin(origins = {"http://localhost:4200"})
public class TodoController {

    @Autowired
    private TodoService todoService;

    // post request 
    @PostMapping
    public Todo createTodo(@RequestBody Todo todo){
        return todoService.createTodo(todo);
    }

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoService.getAllTodos();
    }

    @GetMapping("{id}")
    public Todo searchUserById(@PathVariable("id") Long id){
        return todoService.getTodoById(id);
    }

    @DeleteMapping("{id}")
    public void deleteUserById(@PathVariable("id") Long id){
        todoService.deleteTodo(id);
    }

    @GetMapping("/completed")
    public ResponseEntity<List<Todo>> getAllCompletedTodos() {
        List<Todo> completedTodos = todoService.getAllTodosCompleted();
        return ResponseEntity.ok(completedTodos);
    }
    
    @GetMapping("/incompleted")
    public ResponseEntity<List<Todo>> getAllIncompletedTodos() {
        List<Todo> incompletedTodos = todoService.getAllTodosIncompleted();
        return ResponseEntity.ok(incompletedTodos);
    }

    @PutMapping("/{id}")
    public void updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        todoService.updateTodo(id, todo);
    }
 
}
