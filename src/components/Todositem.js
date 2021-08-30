import React from 'react'

export const Todositem = ({todoitem,ondelete,onreset}) => {
    return (
        <div>
            <h3>{todoitem.title}</h3>
            <h4>{todoitem.desc}</h4>
            <button className = "button" onClick={()=>{ondelete(todoitem)}}>Delete</button>
        </div>
    )
}
