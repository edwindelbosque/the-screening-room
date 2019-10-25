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

export const setUser = user => ({
  type: 'USER',
  user
})