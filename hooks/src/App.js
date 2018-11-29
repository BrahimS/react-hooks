import React, { useState } from 'react'
function Todo ({ todo, index}) {
  return (
    <div className="Todo">{todo.text}</div>
  )
}

function App ()  {
  const [ todos, setTodos ] = useState([
    { 
      text: "First task",
      isCompleted: false
    },
    { 
      text: "Second task",
      isCompleted: false
    },
    { 
      text: "Third task",
      isCompleted: false
    },
  ])
  return (
    <div className="App">
      <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App