import React from 'react'
import { useState } from 'react'

const TodoList = () => {

  const [tudis, setTudis] = useState([])
  const [newTudo, setNewTudo] = useState("")

  let addNewTask = () => {
    setTudis([...tudis, newTudo])
    setNewTudo("")
  }
  
  let updateTodo = (e) => {
    setNewTudo(e.target.value)
    
  }


  return (
    <div>
      <input type="text" placeholder='Add Task' value={newTudo} onChange={updateTodo}/>
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />

      <h4>Todo List</h4>

      <ul>
        
          {
            tudis.map((todo) => (
              <li>
                {todo}
              </li>
            ))
          }
        
      </ul>
      
    </div>
  )
}

export default TodoList
