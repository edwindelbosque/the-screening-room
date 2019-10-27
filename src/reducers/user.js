export const setUser = (state = {}, action) => {
  switch (action.type) {
    case 'USER':
      return action.user;
    case 'USER-LOGOUT':
      return state;
    default:
      return state;
  }
};
