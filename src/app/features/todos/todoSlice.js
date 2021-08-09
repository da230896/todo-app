const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

function nextToDoId(todos) {
    return todos.reduce((maxId, curr)=> Math.max(maxId, curr.id), -1) + 1
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'todos/todoAdded':
            return [
                ...state, 
                {
                    id: nextToDoId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        case 'todos/todoToggled':
            return state.map(todo => {
                    if (todo.id !== action.payload)
                        return todo
                    
                    return {
                        ...todo,
                        completed : !todo.completed
                    }
                })
        case 'todos/colorSelected':
            return state.map(todo => {
                if  (todo.id !== action.payload.todoId) {
                    return todo
                }
                return {
                    ...todo,
                    color: action.payload.color
                }
            })
        case 'todos/todoDeleted':
            return state.filter(todo => {
                return todo.id !== action.payload
            })
        case 'todos/allCompleted':
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case 'todos/completedCleared':
            return state.filter(todo => {
                return todo.completed === false
            })
        default:
            return state
    }

}
