export const favoriteWallpapers = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITE_WALLPAPERS':
      return action.wallpapers;
    default:
      return state;
  }
};
