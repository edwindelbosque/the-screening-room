import { setUser } from './user';

describe('user', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = setUser(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set user', () => {
    const expected = {
      id: 2,
      name: 'Vanessa Randall',
      email: 'vanessalrandall@doane.edu'
    };
    const actionType = 'USER';
    const result = setUser(expected, actionType);
    expect(result).toEqual(expected);
  });

  it('should logout the user', () => {
    const expected = {};
    const actionType = 'USER_LOGOUT';
    const result = setUser(expected, actionType);
    expect(result).toEqual(expected);
  });
});
