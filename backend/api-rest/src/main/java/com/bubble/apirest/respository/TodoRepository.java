package com.bubble.apirest.respository;
import org.springframework.stereotype.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.bubble.apirest.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
    List<Todo> findByCompleted(boolean completed);
}
