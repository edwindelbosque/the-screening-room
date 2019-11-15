export const searchWallpapers = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_WALLPAPERS':
      return action.wallpapers;
    default:
      return state;
  }
};
