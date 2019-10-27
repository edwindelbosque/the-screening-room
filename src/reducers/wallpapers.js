export const wallpapers = (state = [], action) => {
  switch(action.type) {
    case 'SET_WALLPAPERS':
      return action.wallpapers
    default:
      return state;  
  }
}