import React from "react";
import {useSelector} from 'react-redux'

const TodoList = ()=>{
    const todos = useSelector(state=> state.todos);
    console.log(todos);
    return(
        <ul>
            {todos.map((todo, index)=>(
                <li key = {index}>{todo}</li>
            ))}
        </ul>
    )
}
export default TodoList;