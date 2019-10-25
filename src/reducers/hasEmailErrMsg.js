export const emailErrMsg = (state = '', action) => {
  switch (action.type) {
    case 'HAS_EMAIL_ERROR':
      return action.error;
    default:
      return state;
  }
};
