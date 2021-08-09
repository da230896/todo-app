import rootReducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = storeAPI => next => action => {
    console.log('Dispatching', action)
    let result = next(action)
    console.log(`State after dispatching ${action.type}`, storeAPI.getState())
    return result;
}

const composedEnhancer = composeWithDevTools(applyMiddleware(loggerMiddleware))

const store = createStore(rootReducer, composedEnhancer)

export default store