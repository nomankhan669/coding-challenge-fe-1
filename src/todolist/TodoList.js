import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const todos = state.filteredTodos || state.todos;

  const toggleTodo = (e) => {
    dispatch({
      type: "TOGGLE",
      id: e.target.attributes['data-id'].value
    })
  }

  return (
    <ul className="todos">
      {todos.length > 0
        ? todos.map(todo => (
            <li
              key={todo.id}
              className={`todos__item todos__item_${todo.completed && "checked"}`}
            >
              <input
                type="checkbox"
                data-element="toggleTodo"
                data-id={todo.id}
                defaultChecked={todo.completed ? " checked" : ""}
                onClick={toggleTodo}
              />
              {todo.title}
            </li>
          ))
        : ""}
    </ul>
  );
};

export default TodoList;
