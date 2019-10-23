export const userInfo = (state='', action) => {
  switch(action.type) {
    case 'ADD_USER_INFO':
      return action.userInfo
    default:
      return state
  }
}