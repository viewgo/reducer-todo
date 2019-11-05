import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    let query = "";

    (props.search) ? query = props.search : query = "";

  console.log("listing data: ", props.list)

  return (
    <>
      
      <div className="todo-list">

        {props.list.map((element, index) => {

          console.log("list element", element.task);
            console.log(element.task.toLowerCase())

          if (element.task.toLowerCase().includes(query.toLowerCase())) {
            return <Todo key={index} index={index} todoItem={element} checkedHandler={props.checkedHandler} />;
          }

        })}

      </div>
    </>
  );
};

export default TodoList;
