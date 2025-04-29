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
      <div className="todo-buttons">
        <button className="delete" onClick={() => onDelete(index)}>Delete</button>
        <button className="move-button" onClick={() => moveTaskUp(index)}>UP</button>
        <button className="move-button" onClick={() => moveTaskDown(index)}>DOWN</button>
      </div>
    </div>
  );
}

export default TodoItem;