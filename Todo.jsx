import "./Todo.css"
import { useState} from "react";
import { v4 as uuidv4 } from 'uuid';


function Todo(){
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodos]=useState("");

    function TaskAddKaro(){
      setTodos([...todos,{task:newTodo,id:uuidv4()}]) 
      setNewTodos("")
    }
    let updateValue=(event)=>{
      setNewTodos(event.target.value);
    }
    let deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id != id))
       
    }
    let updateAllTask=()=>{
        setTodos((todos)=>(
            todos.map((todo)=>{
             return {...todo,
               
                task:todo.task.toUpperCase(),
            }
            })
        ))
    }
    let markAsDone=(id)=>{
        setTodos((todos)=>(
            todos.map((todo)=>{
                if(todo.id == id){
                    return {...todo,
                    
               isDone:true,
                    }
                }else{
                    return todo;
                }
             
            })
        ))
    }
    
   
    return(
        <div className="todo">
            <input placeholder="Task Add Karo" value={newTodo} onChange={updateValue}></input>
            <button onClick={TaskAddKaro}>Mujh pr click kro</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id} >
                        <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                        <i className="fa-solid fa-trash" onClick={()=>deleteTodo(todo.id)}></i>
                        <button onClick={()=>markAsDone(todo.id)}>markAsDone</button>
                       
                      
                        </li>
                   
                ))}
            </ul>
            <button className="btn" onClick={updateAllTask}>Update All</button>
        </div>
    )
 }
export default Todo;