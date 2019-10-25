export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
});

export const hasErrored = errMsg => ({
  type: 'HAS_ERROR',
  errMsg
});

export const toggleFavorite = title => ({
  type: 'TOGGLE_FAVORITE',
  title
});