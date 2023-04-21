import React from 'react'
import '../index.css'

function TodoFooter({todos,onClearCompleted}) {
  const completedSize = todos.filter((todo) => todo.isCompleted).length
  return (
    <div className='todoFooter'>
        <span>{completedSize}/{todos.length}is Completed</span>
        <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoFooter