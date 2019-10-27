export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
})

export const setWallpapers = wallpapers => ({
  type: 'SET_WALLPAPERS',
  wallpapers
})

export const setLoading = bool => ({
  type: 'IS_LOADING',
  bool
})

export const hasError = error => ({
  type: 'HAS_ERROR',
  error
})

export const hasEmailError = error => ({
  type: 'HAS_EMAIL_ERROR',
  error
})

export const toggleFavorite = title => ({
  type: 'TOGGLE_FAVORITE',
  title
})

export const setFavorites = favorites => ({
  type: 'SET_FAVORITES',
  favorites
})

export const addFavorite = newFavorite => ({
  type: 'ADD_FAVORITE',
  newFavorite
})

export const setUser = user => ({
  type: 'USER',
  user
});

export const logoutUser = () => ({
  type: 'USER_LOGOUT'
});
