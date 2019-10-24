import * as actions from './index';

describe('actions', () => {

  it('should have a type of SET_MOVIES', () => {
    const movies = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_MOVIES',
      movies
    }

    const result = actions.setMovies(movies);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const bool = true;
    const expectedAction = {
      type: 'IS_LOADING',
      bool
    }

    const result = actions.isLoading(bool);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of HAS_ERROR', () => {
    const errMsg = 'Could not fetch data';
    const expectedAction = {
      type: 'HAS_ERROR',
      errMsg
    }

    const result = actions.hasErrored(errMsg);

    expect(result).toEqual(expectedAction);
  })

});