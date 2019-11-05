import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    let query = "";

    (props.search) ? query = props.search : query = "";


  return (
    <>
      
      <div className="todo-list">

        {props.list.map((element, index) => {


          if (element.task.toLowerCase().includes(query.toLowerCase())) {
            return <Todo key={index} index={index} todoItem={element} checkedHandler={props.checkedHandler} />;
          }

        })}

      </div>
    </>
  );
};

export default TodoList;
