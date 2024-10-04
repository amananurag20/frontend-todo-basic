import React from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

const App = () => {
  const data=[
    {
      _id: "66ff727ccf08fd7e1526ca82",
      title: "1211",
      description: "we are learninig backend in express",
      completed: false,
      __v: 0
    },
    {
      _id: "66ff7334cf08fd7e1526ca85",
      title: "1211",
      description: "we are learninig backend in express",
      completed: false,
      __v: 0
    }]
  return (
    <div>
      <CreateTodo/>
      <Todos todos={data}/>
    </div>
  )
}

export default App