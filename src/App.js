import React from 'react';
import TodoFilter from './todoFilter/TodoFilter';
import TodoForm from './todoform/TodoForm';
import TodoList from './todolist/TodoList';

const App = () => {
  return (
    <>
      <TodoForm/>
      <TodoFilter/>
      <TodoList/>
    </>
  )
}

export default App;