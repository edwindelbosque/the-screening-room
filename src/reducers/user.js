export const setUser = (state = {}, action) => {
  switch (action.type) {
    case 'USER':
      return action.user;
    case 'USER_LOGOUT':
      return state;
    default:
      return state;
  }
};
