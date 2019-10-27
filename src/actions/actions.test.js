import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_MOVIES', () => {
    const movies = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_MOVIES',
      movies
    };

    const result = actions.setMovies(movies);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const bool = true;
    const expectedAction = {
      type: 'IS_LOADING',
      bool
    };

    const result = actions.isLoading(bool);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERROR', () => {
    const errMsg = 'Could not fetch data';
    const expectedAction = {
      error: 'Could not fetch data',
      type: 'HAS_ERROR'
    };

    const result = actions.hasError(errMsg);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_EMAIL_ERROR', () => {
    const errMsg = 'Email address already in use';
    const expectedAction = {
      error: 'Email address already in use',
      type: 'HAS_EMAIL_ERROR'
    };

    const result = actions.hasEmailError(errMsg);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_FAVORITE', () => {
    const title = { title: 'Joker' };
    const expectedAction = {
      title: { title: 'Joker' },
      type: 'TOGGLE_FAVORITE'
    };

    const result = actions.toggleFavorite(title);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_FAVORITES', () => {});

  it('should have a type of ADD_FAVORITE', () => {});

  it('should have a type of USER', () => {
    const user = {
      id: 2,
      name: 'Vanessa Randall',
      email: 'vanessa.randall@doane.edu'
    };
    const expectedAction = {
      user: {
        id: 2,
        name: 'Vanessa Randall',
        email: 'vanessa.randall@doane.edu'
      },
      type: 'USER'
    };

    const result = actions.setUser(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of USER_LOGOUT', () => {
    const expectedAction = {
      user: undefined,
      type: 'USER_LOGOUT'
    };

    const result = actions.logoutUser();

    expect(result).toEqual(expectedAction);
  });
});
