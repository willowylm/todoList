import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoList from './todoList'
import User from './user'
import { addTodo } from '../actions/index'

import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Detail  from './Detail'
import { Link} from 'react-router'


export const App = ({ addTodo, todos }) => {
    return (
        <div>
        <header>
        Links:
        {' '}
        <Link to="/">App</Link>
        {' '}
        <Link to="/Detail">Detail</Link>
      </header>
        <div>
            <User/>
            <TodoList/>
            <button onClick={() => browserHistory.push('/Detail')}>Go to /Detail</button>
        </div>
        </div>
)}


export default App
