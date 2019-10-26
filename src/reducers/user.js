export const setUser = (state = {}, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'USER':
      return action.user;
    default:
      return state;
  }
};
