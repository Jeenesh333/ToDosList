import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todos } from './components/Todos';
import { Addtodos } from './components/Addtodos';
import { Footer } from './components/Footer';
 function App(){
   const ondelete = (todoitem)=>{
     console.log("I am Ondelete",todoitem);

     setTodos(todos.filter((e)=>{
       return e!==todoitem;
     }))
   }
   const addtodo = (title,desc)=>{
     console.log(title,desc);
     let sno;
     if(todos.length == 0){
       sno = 0;
     }
     else{
      sno = todos[todos.length-1].sno+1;
     }
     const mytodo = {
       sno:sno,
       title:title,
       desc:desc,
     }
     setTodos([...todos,mytodo]);
     console.log(mytodo);
   }

   const [todos, setTodos] = useState([]);
  return (
    <>
    <Header title ="ToDoList"   navbar = {true} />
    <Addtodos addtodo = {addtodo}/>
    <Todos todos = {todos} ondelete = {ondelete} onreset = {onreset}/>
    <Footer/>
    </>
  );
}

export default App;