import React from 'react';
import './App.css';
import todoStore from './stores/TodoStore';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList todoList={todoStore} />
    </div>
  );
}

export default App;
