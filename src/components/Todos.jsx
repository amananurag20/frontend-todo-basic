/* eslint-disable react/prop-types */

const Todos = ({todos}) => {
    console.log(todos)
  return (
    <div>
        {todos.map((todo)=>{
            return <div key={todo._id}>
               <h1> Title: {todo.title}</h1>
               <h3>Description:{todo.description}</h3>
               <button >{todo.completed?"completed":"marks as completed"}</button>
            </div>
        })}
    </div>
  )
}

export default Todos