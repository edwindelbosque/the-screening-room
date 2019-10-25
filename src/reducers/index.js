import { combineReducers } from 'redux';
import { movies } from './movies';
import { errMsg } from './errMsg';
import { setLoading } from './setLoading';
import { setUser } from './user';

const rootReducer = combineReducers({
  movies,
  errMsg,
  setLoading,
  user: setUser
});

export default rootReducer;
