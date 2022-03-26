import React from 'react';
import { useDispatch } from 'react-redux';

const TodoFilter = () => {

  const dispatch = useDispatch();
  const filterTodos = (e) => {
    dispatch({
      type: "FILTER",
      status: e.target.value
    })
  }
  return (
    <div>
      <span>
        <input type="radio" name="filter" id="filter-all" data-element="todoFilter" value="all" onClick={filterTodos} defaultChecked="checked" />
        <label htmlFor="filter-all">Show all</label>
      </span>
      <span>
        <input type="radio" name="filter" id="filter-open" data-element="todoFilter" value="open" onClick={filterTodos} />
        <label htmlFor="filter-open">Show open</label>
      </span>
      <span>
        <input type="radio" name="filter" id="filter-closed" data-element="todoFilter" value="closed" onClick={filterTodos} />
        <label htmlFor="filter-closed">Show closed</label>
      </span>
    </div>
  )
}

export default TodoFilter;