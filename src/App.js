import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilterTodos(todos)
        break
    }
  }
  return (
    <div className="App">
      <header>
      <h1>Matt's Todo List</h1>
    </header>
    <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
    />
    <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;
