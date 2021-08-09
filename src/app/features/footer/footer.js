import React from 'react'
import { useSelector } from 'react-redux'

import {StatusFilters} from '../filters/filterSlice'
import {availableColors, capitalize} from '../filters/colors'

const RemainingTodos = ({count}) => {
    const suffix = count === 1 ? '' : 's'
    return (
        <>
            <h5> Remaining Todos</h5>
            <strong>{count}</strong> item{suffix} remaining
        </>
    )
}

const StatusFilter = ({value: currentStatus, onChange}) => {
    const renderedFilters = Object.keys(StatusFilter).map(key => {
        const value = StatusFilter[key]
        const handleClick = () => onChange(value)
        const className = currentStatus === value ? 'StatusSelection':''
        
        return (
            <li key={key}>
                <button className={className} onClick={handleClick}>
                    {key}
                </button>
            </li>
        )
    })
    return (
        <div>
            <h5>Filter by Status</h5>
            <ul>
                {renderedFilters}
            </ul>
        </div>
    )
}

const ColorFilter = ({value:colors, onColorChange}) => {
    const renderedColors = availableColors.map(color => {
        const checked = colors.include(color)
        const handleChange = () => {
            const changeType = checked ? 'removed':'added'
            onColorChange(color, changeType)
        }

        return (
            <label key={color}>
                <input
                    type="checkbox"
                    name={color}
                    checked={checked}
                    onChange={handleChange}
                />
                <span
                    className='colorSpan'
                    style= {{
                        backgroundColor: color
                    }}
                />
                {capitalize(color)}
            </label>
        )
    })

    return (
        <div>
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
    )

}

const Footer = () => {
    const {status, colors} = useSelector(state => state.filters)
    const todosRemaining = useSelector(state => {
        const uncompletedTodos = state.todos.filter(todo => !todo.completed)
        return uncompletedTodos.length
    })


    const onColorChange = (color, changeType) => console.log('Color changed', {color, changeType})
    const onStatusChange = (status) => console.log('status changed: ', status)

    return (
        <footer>
            <div>
                <button>Mark All Completed</button>
                <button>Clear Completed</button>
            </div>
            <RemainingTodos count={todosRemaining}/>
            <StatusFilter value={status} onChange={onStatusChange}/>
            <ColorFilter value={colors} onChange={onColorChange}/>
        </footer>
    )
}

export default Footer


