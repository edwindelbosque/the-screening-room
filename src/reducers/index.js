import { combineReducers } from 'redux';
import { movies } from './movies';
import { errMsg } from './errMsg';
import { setLoading } from './setLoading';
import { favorites } from './favorites';
import { setUser } from './user';
import { emailErrMsg } from './hasEmailErrMsg';


const rootReducer = combineReducers({
  movies,
  errMsg,
  isLoading: setLoading,
  favorites,
  emailErrMsg,
  user: setUser
}) 

export default rootReducer;
