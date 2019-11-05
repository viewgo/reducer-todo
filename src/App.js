import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {reducer, initialState} from "./reducers/reducer";

function App() {

  const [list, dispatch] = useReducer(reducer, initialState);

  const handleCheck = (todoItem) => {
    dispatch({ type: "SET_COMPLETED", payload: todoItem.id })
  }

  return (
    <div className="App">
      <TodoForm />
      <TodoList checkedHandler={handleCheck} list={list}/>
    </div>
  );
}

export default App;

