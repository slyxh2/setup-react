import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
import { combinedReducers } from './reducers/index'

let store = createStore(combinedReducers, applyMiddleware(thunk, promise, logger));

export default store;