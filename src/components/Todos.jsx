/* eslint-disable react/prop-types */

import axios from "axios";
import "../App.css"
const Todos = ({ todos, setTodos }) => {
  console.log(todos);

  const handleComplete = async (todo) => {
    if (todo.completed) {
      alert("todo already completed");
      return;
    }
    try {
       await axios.put("http://localhost:5000/completed", {
        id: todo._id,
      });

      // const response= await axios.get("http://localhost:5000/todos");
      // setTodos(response.data.todos);     

      const updatedTodos = todos.map((task) => {
        if (task._id === todo._id) {
          task.completed = true;
        }
        return task;
      });
      
      setTodos(updatedTodos);
      console.log("updated", updatedTodos)
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDelete= async(todo)=>{
   
    try{
     await axios.delete(`http://localhost:5000/delete/${todo._id}`);
    //  alert("Todo successfully deleted")
      
     const newTodos= todos.filter((task)=>{
         return task._id!==todo._id
     })
     setTodos(newTodos)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1 className={todo.completed?"completed":""} > Title: {todo.title}</h1>
            <h3 className={todo.completed?"completed":""} >Description:{todo.description}</h3>
            <button
              onClick={() => {
                handleComplete(todo);
              }}
            >
              {todo.completed ? "completed" : "marks as completed"}
            </button>

            <button onClick={()=>handleDelete(todo)} style={{marginLeft:5}}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
