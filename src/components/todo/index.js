import React, {createContext, useEffect, useState} from 'react';
import {addTodoAjax, getTodoListAjax} from "../../api/todoAPI";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export const TodoContext = createContext()

const initResult = {
    start: 0,
    end: 0,
    prev: false,
    next: false,
    dtoList: []
}

const Todo = () => {

    const [result, setResult] = useState(initResult)

    const movePage = (pageNum) => {
        getTodoListAjax(pageNum).then(res => {
            setResult(res)
        })
    }


    const addTodo = (todo) =>{
        addTodoAjax(todo).then(()=>{
            movePage(1)
        })
    }



    useEffect(()=>{
        movePage(1)
    },[])

    return (
        <TodoContext.Provider value={{result, movePage, addTodo}}>
            <div>
                <TodoInput></TodoInput>
                <TodoList></TodoList>
            </div>
        </TodoContext.Provider>
    );
};

export default Todo;