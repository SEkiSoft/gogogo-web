import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';

import Title from './Title.js';

const store = createStore(rootReducer, {}, compose(
	applyMiddleware(thunk), 
	window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDOM.render(
	<Provider store={store}>
		<Title />
	</Provider>, document.getElementById("App")
);