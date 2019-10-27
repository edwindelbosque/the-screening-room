export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.newFavorite];
    case 'SET_FAVORITES':
      return action.favorites;
    default:
      return state;
  }
};
