
import { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

const App = () => {
   
  const [todos, setTodos]= useState([]);

  const fetchTodos=async()=>{
    const response= await fetch("http://localhost:5000/todos");
    const data= await response.json();
    setTodos(data.todos);  //10 data
  }
    
  useEffect(()=>{
    fetchTodos(); 
  },[]);

  return (
    <div>
      <CreateTodo setTodos={setTodos} todos={todos}/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App