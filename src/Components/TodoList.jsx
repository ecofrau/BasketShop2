import React, { useEffect } from "react";
import todoState from "../state/todo";
import { observer } from "mobx-react-lite";

function TodoList() {
  return (
    <div>
      {todoState.todoList.map((todo) => (
        <div key={todo.id}>
          <p style={{color: todo.done ? "grey": "red"}}>{todo.title}</p>
          <button onClick={()=> todoState.remove(todo.id)}>Remove</button>
          <button onClick={() =>todoState.changeDone(todo.id)}>Change done</button>
        </div>
      ))}
    </div>
  );
}
export default observer(TodoList);
