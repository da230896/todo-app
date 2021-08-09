import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {availableColors, capitalize} from '../filters/colors';

const selectTodo = (state, todoId) => state.todos.find(todo => todo.id === todoId)

// onCompletedChange, onColorChange, onDelete ==> We are going to dispatch them  using useDespatch
const TodoListItem = ({todoId}) => {
    const {text, completed, color} = useSelector(state => selectTodo(state, todoId))
    const dispatch = useDispatch()
    const handleCompleted = () => dispatch({type:'todos/todoToggled', payload: todoId})
    const handleColorChange = (c) => dispatch({type: 'todos/colorSelected', payload: {todoId, color:c.target.value}}) 
    const handleDeleted = () => dispatch({type:'todos/todoDeleted', payload: todoId})

    const colorOptions = availableColors.map((color) => {
        <option key={color} id={color}>
            {capitalize(color)}
        </option>
    })

    return (
        <li>
        <input
            type="checkbox"
            checked={completed}
            onChange={handleCompleted}
        />
        <div>{text}</div>
        <select
            value={color}
            style={{color}}
            onChange={handleColorChange}
        >
            {colorOptions}
        </select>
        <button text="Delete" onClick={handleDeleted}/>
        </li>
    )


}

export default TodoListItem