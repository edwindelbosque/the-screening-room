import { combineReducers } from 'redux';
import { movies } from './movies';
import { hasError } from './hasError';
import { setLoading } from './setLoading';


const rootReducer = combineReducers({
  movies,
  hasError,
  setLoading
});

export default rootReducer;