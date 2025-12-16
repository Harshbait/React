import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const [toodos, setToodos] = useState([])
  const [newTodo, setnewTodo] = useState("")

  let addTask = () => {
    
    setToodos((prevTodos) => {
      return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
    })
    setnewTodo("")
    console.log("we have to add new task in todo")
  }

  let updateTodo = (e) => {
    setnewTodo(e.target.value)
  }

  let deleteTodo = (id) => {
    console.log(id);
    setToodos((prevTodos) => toodos.filter((prevTodos) => prevTodos.id != id));
    console.log(copy)
  }

  let upperCaseAll = () => {

    //If we use old values then we use callback
    setToodos(toodos.map((toodos) => {
      return {
        ...toodos,
        task: toodos.task.toUpperCase()
      }
    }))
  }
  let markedCaseAll = () => {

    //If we use old values then we use callback
    setToodos(toodos.map((toodos) => {
      return {
        ...toodos,
        isDone: true
      }
    }))
  }

  let lowerCase = (id) => {
    setToodos(toodos.map((toodos) => {
      if(toodos.id == id) {
        return {
          ...toodos,
          task: toodos.task.toUpperCase()
        }
      } else {
        return toodos
      }
    }))
  }

  let markedAsDone = (id) => {
    setToodos(toodos.map((toodos) => {
      if(toodos.id == id) {
        return {
          ...toodos,
          isDone: true
        }
      } else {
        return toodos
      }
    }))
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={updateTodo} placeholder='add Task' />
      <br />
      <button onClick={addTask}>Add task</button>

      <br />
      <br />
      <br />

      <hr />
      <h4>Todo List</h4>
      <ul>
        {
          toodos.map((toodos) => (
            <li key={toodos.id}>
              <span style={toodos.isDone?{textDecorationLine: "line-through"} : {}}>{toodos.task}</span> &nbsp;&nbsp;
              <button onClick={() => {deleteTodo(toodos.id)}}>Delete</button> 
              <button onClick={() => {lowerCase(toodos.id)}}>Individual Task update</button>
              <button onClick={() => {markedAsDone(toodos.id)}}>Marked as done</button>
            </li> 
          )) 
        }
      </ul>
      <br />
      <button onClick={upperCaseAll}>All task update</button>
      <button onClick={markedCaseAll}>Mark All as done</button>
    </div>
  )
}

export default TodoList
