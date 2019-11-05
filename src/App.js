import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {reducer, initialState} from "./reducers/reducer";

function App() {

  const [list, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  const handleCheck = (todoItem) => {
    dispatch({ type: "SET_COMPLETED", payload: todoItem.id })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "ADD_TODO", payload: task})
  }



  const handleChange = event => {
    console.log(event.target.name, event.target.value);
    setTask(event.target.value);
  };

  return (
    <div className="App">
      <TodoForm handleChange={handleChange} task={task} handleSubmit={handleSubmit}/>
      <TodoList  checkedHandler={handleCheck} list={list}/>
    </div>
  );
}

export default App;

