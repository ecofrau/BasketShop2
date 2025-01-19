import React from "react";
import todoState from "../state/todo";

function AddTodo() {
  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      title: e.target.title.value,
      done: false,
    };

    todoState.add(todo);
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required name="title" />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;
