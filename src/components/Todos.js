import React from 'react'
import {Todositem} from './Todositem'

export const Todos = (props) => {
    return (
        <div className = "container">
            <h1>To Do List</h1>
            {props.todos.length == 0? <h1>Opps! No ToDos to display</h1>:
            props.todos.map((todoitem)=>{
                return (
                    <>
                    <Todositem todoitem = {todoitem} ondelete = {props.ondelete}/> <hr/>
                    </>
                )
            })}
                
        </div>
    )
}
