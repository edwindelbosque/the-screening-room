export const setMovies = movies => ({
	type: 'SET_MOVIES',
	movies
});

export const setWallpapers = wallpapers => ({
	type: 'SET_WALLPAPERS',
	wallpapers
});

export const setFavoriteWallpapers = wallpapers => ({
	type: 'SET_FAVORITE_WALLPAPERS',
	wallpapers
});

export const setSearchWallpapers = wallpapers => ({
	type: 'SET_SEARCH_WALLPAPERS',
	wallpapers
});

export const setLoading = bool => ({
	type: 'IS_LOADING',
	bool
});

export const setError = error => ({
	type: 'HAS_ERROR',
	error
});

export const hasEmailError = error => ({
	type: 'HAS_EMAIL_ERROR',
	error
});

export const toggleFavorite = title => ({
	type: 'TOGGLE_FAVORITE',
	title
});

export const setFavorites = favorites => ({
	type: 'SET_FAVORITES',
	favorites
});

export const addFavorite = newFavorite => ({
	type: 'ADD_FAVORITE',
	newFavorite
});

export const setUser = user => ({
	type: 'USER',
	user
});

export const logoutUser = () => ({
	type: 'USER_LOGOUT'
});

export const setRandomWallpaper = wallpapers => ({
	type: 'RANDOM_WALLPAPER',
	wallpapers
});

export const resetFavorites = () => ({
	type: 'RESET_FAVORITES'
});

export const resetMoviesFavorites = () => ({
	type: 'RESET_MOVIES_FAVORITES'
});

export const setSearchResults = results => ({
	type: 'SET_SEARCH_RESULTS',
	results
});
