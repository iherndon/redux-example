import { createStore, combineReducers } from 'redux';
import todos from './todos';

const redux = createStore(combineReducers({ todos }));

export default redux;