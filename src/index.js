import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './compenents/App';
import Detail from './compenents/Detail';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const store = createStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
          <Route path="detail" component={Detail}/>
        </Route>
      </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
