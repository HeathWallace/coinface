/* global process */ // Inserted by webpack.
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import DevTools from './containers/DevTools/DevTools';

const maybeDevTools = process.env.NODE_ENV !== 'production' ? DevTools.instrument() : undefined;

const enhancer = compose(
	applyMiddleware(thunk),
	maybeDevTools
);

const store = createStore(appReducer, {}, enhancer);

export default store;
