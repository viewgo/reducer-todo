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
    setTask("");
  }

  const handleClear = (event) => {
    event.preventDefault();
    dispatch({type: "CLEAR"})
  }



  const handleChange = event => {
    setTask(event.target.value);
  };

  return (
    <div className="App">
      <TodoForm handleChange={handleChange} task={task} handleSubmit={handleSubmit} handleClear={handleClear}/>
      <TodoList  checkedHandler={handleCheck} list={list}/>
    </div>
  );
}

export default App;

