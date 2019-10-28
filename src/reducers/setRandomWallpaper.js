export const setRandomWallpaper = (state = [], action) => {
  switch (action.type) {
    case 'RANDOM_WALLPAPER':
      return action.wallpapers[Math.floor(Math.random() * Math.floor(19))]
        .wallpaper;
    default:
      return state;
  }
};
