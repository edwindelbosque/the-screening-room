import { searchResults } from './searchResults';

describe('searchResults', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = searchResults(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_SEARCH_RESULTS action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_SEARCH_RESULTS',
      results: [{}, {}]
    };
    const result = [{}, {}];

    expect(searchResults(initialState, action)).toEqual(result);
  });

  it('should output the correct case of TOGGLE_FAVORITE action type', () => {
    const initialState = [
      { id: 1, favorite: false, title: 'Maleficent' },
      { id: 2, favorite: false, title: 'Frozen II' },
      { id: 3, favorite: false, title: 'Shawshank Redemption' }
    ];
    const action = {
      type: 'TOGGLE_FAVORITE',
      title: 'Maleficent'
    };

    const result = [
      { favorite: true, id: 1, title: 'Maleficent' },
      { favorite: false, id: 2, title: 'Frozen II' },
      { favorite: false, id: 3, title: 'Shawshank Redemption' }
    ];

    expect(searchResults(initialState, action)).toEqual(result);
  });

  it('should output the correct case of RESET_MOVIE_FAVORITES action type', () => {
    const initialState = [];
    const action = {
      type: 'RESET_MOVIE_FAVORITES'
    };

    const result = [];

    expect(searchResults(initialState, action)).toEqual(result);
  });
});