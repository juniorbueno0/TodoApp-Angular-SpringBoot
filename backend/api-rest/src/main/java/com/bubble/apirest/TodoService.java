package com.bubble.apirest;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bubble.apirest.model.Todo;
import com.bubble.apirest.respository.TodoRepository;


@Component
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    // create
    public Todo createTodo(Todo user){
        return todoRepository.save(user);
    }

    // get by id
    public Todo getTodoById(Long id){
        Optional<Todo> optionalTodo = todoRepository.findById(id);
        return optionalTodo.get();
    }

    // get all
    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    // delete by id
    public void deleteTodo(Long id){
        todoRepository.deleteById(id);
    }

    public List<Todo> getAllTodosCompleted() {
        return todoRepository.findAll().stream()
            .filter(todo -> todo.getCompleted() == true)
            .collect(Collectors.toList());
    }

    public List<Todo> getAllTodosIncompleted() {
        return todoRepository.findAll().stream()
        .filter(todo -> todo.getCompleted() == false)
        .collect(Collectors.toList());
    }

    public void updateTodo(Long id, Todo todo) {
        todoRepository.save(todo);
    }

}
