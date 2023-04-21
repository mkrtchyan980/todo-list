import React from 'react'
import TodoListItem from './TodoListItem'
import '../index.css'

function TodoList({todos,onDelate,onChange}) {
  return (
    <div className='todoList'>
        {
            todos.map((todo) =><TodoListItem key={todo.id} todo={todo} onDelate={onDelate} onChange={onChange}/>)
        }
    </div>
  )
}

export default TodoList