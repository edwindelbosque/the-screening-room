import { movies } from './movies.js';

describe('movies', () => {
  it('should output the correct case of SET_MOVIES action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_MOVIES',
      movies: [{}, {}, {}]
    };

    const result = [{}, {}, {}];

    expect(movies(initialState, action)).toEqual(result);
  });

  it('should not output of the case of SET_MOVIES action type', () => {
    const initialState = [];
    const wrongAction = {
      type: 'WRONG_ACTION',
      movies: [{}, {}, {}]
    };

    expect(movies(initialState, wrongAction)).toEqual(initialState);
  });
});
