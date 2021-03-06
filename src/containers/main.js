import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import rootReducer from '../reducers';

import Login from './login';
import Signup from './signup';
import HomePage from '../components/HomePage';
import Game from '../components/Game';
import Title from '../components/Title';

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDOM.render(
  <Provider store={store}>
    <div className="container-fluid">
      <Router history={browserHistory}>
        <Route path="/" component={Title} >
          <IndexRoute component={Login} />
          <Route path="home" component={HomePage} />
          <Route path="play" component={Game} />
          <Route path="signup" component={Signup} />
        </Route>
      </Router>
    </div>
  </Provider>, document.getElementById('App')
);

