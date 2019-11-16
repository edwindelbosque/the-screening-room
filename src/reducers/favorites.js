export const favorites = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [action.newFavorite, ...state];
    case "SET_FAVORITES":
      return (state = action.favorites.map(movie => ({
        ...movie,
        favorite: true
      })));
    case "RESET_FAVORITES":
      return (state = []);
    default:
      return state;
  }
};
