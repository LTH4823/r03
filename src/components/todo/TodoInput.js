import React, {useContext} from 'react';
import {TodoContext} from "./index";

const TodoInput = () => {

    const {addTodo} = useContext(TodoContext)

    const clickAdd = ()=> {
        const todo = {title:'test', dueDate:'2022-06-23',writer:'user02'}
        addTodo(todo)
    }

    return (
        <div>
            <button onClick={()=>clickAdd()}>ADD TODO</button>
        </div>
    );
};

export default TodoInput;