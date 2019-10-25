import { combineReducers } from 'redux';
import { movies } from './movies';
import { errMsg } from './errMsg';
import { setLoading } from './setLoading';
import { setUser } from './user';
import { emailErrMsg } from './hasEmailErrMsg';

const rootReducer = combineReducers({
  movies,
  errMsg,
  setLoading,
  emailErrMsg,
  user: setUser
});

export default rootReducer;
