
import { useEffect, useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

const App = () => {
   
  const [todos, setTodos]= useState([]);

  const fetchTodos=async()=>{
    const response= await fetch("http://localhost:5000/todos");
    const data= await response.json();
    setTodos(data.todos);  //infinite loop
  }
    
  useEffect(()=>{
    fetchTodos(); 
  },[]);

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App