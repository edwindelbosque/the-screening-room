export const hasError = (state='', action) => {
  switch(action.type) {
    case 'HAS_ERROR':
      return action.hasError
    default:
      return state  
  }
}