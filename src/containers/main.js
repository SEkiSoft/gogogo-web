import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import rootReducer from '../reducers';

import Login from '../components/Login';
import Game from '../components/Game';
import Title from '../components/Title';

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDOM.render(
  <Provider store={store}>
    <div>
     <Router history={hashHistory}>
       <Route path="/" component={Title} >
	       <IndexRoute component={Login} />
	       <Route path="play" component={Game} />
	   </Route>
  </Router>
    </div>
  </Provider>, document.getElementById('App')
);
