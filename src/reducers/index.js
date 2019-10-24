import { combineReducers } from 'redux';
import { movies } from './movies';
import { hasError } from './hasError';
import { setLoading } from './setLoading';
import { favorites } from './favorites';


const rootReducer = combineReducers({
  movies,
  error: hasError,
  isLoading: setLoading,
  favorites
});

export default rootReducer;
