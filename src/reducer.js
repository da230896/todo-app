import { combineReducers } from "redux";
import todosReducer from './app/features/todos/todoSlice.js'
import filtersReducer from './app/features/filters/filterSlice.js'

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer