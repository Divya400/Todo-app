import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, dueDate, category) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      dueDate,
      category,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    setTodos((prevTodos) => {
      if (index > 0) {
        const newTodos = [...prevTodos];
        [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
        return newTodos;
      }
      return prevTodos;
    });
  };

  const moveTaskDown = (index) => {
    setTodos((prevTodos) => {
      if (index < prevTodos.length - 1) {
        const newTodos = [...prevTodos];
        [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
        return newTodos;
      }
      return prevTodos;
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
      />
    </div>
  );
}

export default App;