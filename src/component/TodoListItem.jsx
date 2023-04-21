import React from 'react'
import '../index.css'

function TodoListItem({todo,onDelate,onChange}) {
  return (
    <div>
        <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
            onChange({
                ...todo,
                isCompleted:e.target.checked
            })
        }}/>
        {todo.text}
        <button onClick={()=>{
            onDelate(todo)
        }}>X</button>
    </div>
  )
}

export default TodoListItem