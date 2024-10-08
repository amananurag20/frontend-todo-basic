/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

const CreateTodo = ({setTodos, todos}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async () => {

    try{

      // const response=await fetch("http://localhost:5000/todo" ,{
      //   method:"POST",
      //   body:JSON.stringify({
      //     title, //title:title
      //     description:description
      //   }),
      //   headers:{
      //     "Content-type":"application/json"
      //   }
      // });
  
      // const data= await response.json();
       
      const response = await axios.post("http://localhost:5000/todo", {
        title: title,
        description: description,
      });
      console.log(response.data.todo);
      setTodos([...todos, response.data.todo])
      setTitle("");
      setDescription("");
    }catch(e){
       console.log(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title of ur task"
        style={{ margin: "10px", padding: "10px" }}
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Description here"
        style={{ margin: "10px", padding: "10px" }}
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      ></input>
      <br></br>
      <button style={{ margin: "10px", padding: "10px" }} onClick={handleClick}>
        Create Todo
      </button>
    </div>
  );
};

export default CreateTodo;
