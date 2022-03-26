import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
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
    <div className="form">
      <input
        type="text"
        data-element="addTodoInput"
        onChange={(e) => setTodoTitle(e.target.value)}
        onKeyUp={onPressEnter}
        value={todoTitle}
      />
      <button data-element="addTodoButton" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
