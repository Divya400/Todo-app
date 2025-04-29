import React from 'react';

function TodoItem({ todo, index, onToggle, onDelete, moveTaskUp, moveTaskDown }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(index)}
      />
      <span className="todo-text">{todo.text}</span>
      {todo.dueDate && <span className="todo-due-date">Due: {todo.dueDate}</span>}
      {todo.category && <span className="todo-category">Category: {todo.category}</span>}
      <div className="todo-buttons">
        <button className="delete" onClick={() => onDelete(index)}>Delete</button>
        <button className="move-button" onClick={() => moveTaskUp(index)}>UP</button>
        <button className="move-button" onClick={() => moveTaskDown(index)}>DOWN</button>
      </div>
    </div>
  );
}

export default TodoItem;