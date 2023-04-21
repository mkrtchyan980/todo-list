import React, { useState } from 'react'

function TodoForm({onAdd}) {
    const [text,setText] = useState("")
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        onAdd(text)
        setText("")
    }}>
        <input type="text" value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button>Add</button>
    </form>
  )
}

export default TodoForm