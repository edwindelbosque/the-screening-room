import { combineReducers } from 'redux';
import { movies } from './movies';
import { wallpapers } from './wallpapers';
import { errMsg } from './errMsg';
import { isLoading } from './setLoading';
import { favorites } from './favorites';
import { setUser } from './user';
import { emailErrMsg } from './hasEmailErrMsg';
import { setRandomWallpaper } from './setRandomWallpaper';
import { searchResults } from './searchResults';
import { favoriteWallpapers } from './favoriteWallpapers';
import { searchWallpapers } from './searchWallpapers';

const rootReducer = combineReducers({
	movies,
	wallpapers,
	errMsg,
	isLoading,
	favorites,
	emailErrMsg,
	user: setUser,
	setRandomWallpaper,
	searchResults,
	favoriteWallpapers,
	searchWallpapers
});

export default rootReducer;
