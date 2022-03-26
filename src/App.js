import React from 'react';
import TodoFilter from './todoFilter/TodoFilter';
import TodoForm from './todoform/TodoForm';
import TodoList from './todolist/TodoList';
import styles from './main.style'

const App = () => {

  const classes = styles();

  return (
    <div className={classes.todoApp}>
      <TodoForm/>
      <TodoFilter/>
      <TodoList/>
    </div>
  )
}

export default App;