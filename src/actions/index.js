export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
});

export const hasError = (error) => ({
  type: 'HAS_ERROR',
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
})
