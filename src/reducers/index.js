import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { base } from './base.js';

export default combineReducers({
    base: base,
    routing: routerReducer
});
