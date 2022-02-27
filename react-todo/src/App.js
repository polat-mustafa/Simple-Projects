import React from 'react';
//COMPONENT
import TodoList from './components/TodoList';

//CONTEXT
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
    <TodoProvider>
      <div className='container'>      
      <h1>Todo App</h1>
      <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
