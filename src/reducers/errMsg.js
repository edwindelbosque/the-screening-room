export const errMsg = (state='', action) => {
  console.log(action)
  switch(action.type) {
    case 'HAS_ERROR':
      return action.error
    default:
      return state  
  }
}