

const CreateTodo = () => {
  return (
    <div>
        <input type="text" placeholder="Enter Title of ur task" style={{margin:"10px", padding:"10px"}}></input>
        <br></br>
        <input type="text" placeholder="Description here" style={{margin:"10px", padding:"10px"}}></input>
        <br></br>
        <button style={{margin:"10px", padding:"10px"}}>Create Todo</button>
    </div>
  )
}

export default CreateTodo