import React from "react";

const Todo = props => (
  <div className="todo-item">
    <div className="todo-checkbox">
      <input
        type="checkbox"
        checked={props.todoItem.completed}
        onChange={e => props.checkedHandler(props.todoItem)}
      />
    
      <span>{props.todoItem.task}</span>
    </div>
  </div>
);

export default Todo;
