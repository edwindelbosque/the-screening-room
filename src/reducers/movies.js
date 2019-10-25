export const movies = (state = [], action) => {
  switch(action.type) {
    case 'SET_MOVIES':
      return action.movies
    case 'TOGGLE_FAVORITE':
      return state.map(movie => (
        movie.title === action.title ? {...movie, favorite: !movie.favorite } : movie
      ))
    default:
      return state;
  }
}