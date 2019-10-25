import { combineReducers } from 'redux';
import { movies } from './movies';
import { errMsg } from './errMsg';
import { setLoading } from './setLoading';
import { favorites } from './favorites';
import { setUser } from './user';


const rootReducer = combineReducers({
  movies,
  error: hasError,
  isLoading: setLoading,
  favorites,
  user: setUser
}) 

export default rootReducer;
