import React, {useContext} from 'react';
import {TodoContext} from "./index";
import TodoListPagination from "./TodoListPagination";

const TodoList = () => {

    const {result} = useContext(TodoContext)
    const {dtoList} = result

    return (
        <div>
            <ul>
                {dtoList.map(({tno,title,dueDate,writer}) =><li key={tno}>{title}--{dueDate}--{writer}</li>)}
            </ul>
            <TodoListPagination/>
        </div>
    );
};

export default TodoList;