import React from 'react'

export default function Input (props) {
    return (
        <input
        className="input"
        type="text"
        value={props.value}
        onChange={({target})=>props.newTodo(target.value)}
        onKeyUp={(e)=>{
          if (e.key === 'Enter') {
            props.handlerNewTodo(e)
          }
        }}
      />)
}