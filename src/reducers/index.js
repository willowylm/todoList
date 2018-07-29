import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


const rootReducer = combineReducers({
    users,
    todos,
    routing: routerReducer
})

export default rootReducer