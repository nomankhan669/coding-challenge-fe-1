import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../main.style';

const TodoFilter = () => {

  const dispatch = useDispatch();
  const classes = styles();

  const filterTodos = (e) => {
    dispatch({
      type: "FILTER",
      status: e.target.value
    })
  }
  return (
    <div className={classes.todoFilterWrapper}>
      <span>
        <input type="radio" name="filter" id="filter-all" data-element="todoFilter" value="all" onClick={filterTodos} defaultChecked="checked" />
        <label htmlFor="filter-all" className={classes.todoFilterLabel}>Show all</label>
      </span>
      <span>
        <input type="radio" name="filter" id="filter-open" data-element="todoFilter" value="open" onClick={filterTodos} />
        <label htmlFor="filter-open" className={classes.todoFilterLabel}>Show open</label>
      </span>
      <span>
        <input type="radio" name="filter" id="filter-closed" data-element="todoFilter" value="closed" onClick={filterTodos} />
        <label htmlFor="filter-closed" className={classes.todoFilterLabel}>Show closed</label>
      </span>
    </div>
  )
}

export default TodoFilter;