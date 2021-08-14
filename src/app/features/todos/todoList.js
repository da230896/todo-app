import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import TodoListItem from './todoListItem';

const selectTodosIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
    const todosIds = useSelector(selectTodosIds,shallowEqual)

    const todoListItems = todosIds.map(todoId =>  {
        // We have made the prop to be todoId but i think this could have been achieved by earlier also!
        return <TodoListItem key={todoId} todoId={todoId}/>
    })

    return (<ul className="todo-list">
        {todoListItems}
    </ul>)
}

export default TodoList