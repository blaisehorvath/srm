import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import path from './initialpath';

export default combineReducers({
  user,
  runtime,
  path
});
