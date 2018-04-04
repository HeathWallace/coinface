import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import DevTools from './containers/DevTools/DevTools';

const enhancer = compose(applyMiddleware(thunk), DevTools.instrument());

const store = createStore(appReducer, {}, enhancer);

export default store;
