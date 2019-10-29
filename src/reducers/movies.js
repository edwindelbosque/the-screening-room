export const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.movies;
    case 'TOGGLE_FAVORITE':
      return state.map(movie =>
        movie.title === action.title
          ? { ...movie, favorite: !movie.favorite }
          : movie
      );
    case 'RESET_MOVIES_FAVORITES':
      return state.map(movie => ({
        ...movie, favorite: false
      }))
    default:
      return state;
  }
};
