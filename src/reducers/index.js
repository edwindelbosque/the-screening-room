import { combineReducers } from 'redux';
import { movies } from './movies';
import { wallpapers } from './wallpapers';
import { errMsg } from './errMsg';
import { setLoading } from './setLoading';
import { favorites } from './favorites';
import { setUser } from './user';
import { emailErrMsg } from './hasEmailErrMsg';

const rootReducer = combineReducers({
  movies,
  wallpapers,
  errMsg,
  isLoading: setLoading,
  favorites,
  emailErrMsg,
  user: setUser
});

export default rootReducer;
