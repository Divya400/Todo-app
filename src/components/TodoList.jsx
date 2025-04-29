import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete, moveTaskUp, moveTaskDown }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onToggle={onToggle}
          onDelete={onDelete}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      ))}
    </div>
  );
}

export default TodoList;