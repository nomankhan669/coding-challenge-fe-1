import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../main.style";

const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const classes = styles();

  const addTodo = () => {
    if (!todoTitle) return;

    dispatch({
      type: "ADD",
      title: todoTitle,
    });
    setTodoTitle("");
  };

  const onPressEnter = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  return (
    <div className={`form ${classes.todoForm}`}>
      <input
        type="text"
        data-element="addTodoInput"
        onChange={(e) => setTodoTitle(e.target.value)}
        onKeyUp={onPressEnter}
        value={todoTitle}
        className={classes.todoInput}
      />
      <button data-element="addTodoButton" onClick={addTodo} className={classes.todoBtn}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
