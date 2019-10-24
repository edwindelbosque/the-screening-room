import { combineReducers } from 'redux';
import { movies } from './movies';
import { hasError } from './hasError';
import { setLoading } from './setLoading';
import { setUser } from './user';

const rootReducer = combineReducers({
  movies,
  hasError,
  setLoading,
  user: setUser
});

export default rootReducer;
