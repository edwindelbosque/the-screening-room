import { favorites } from './favorites';

describe('favorites', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favorites(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of ADD_FAVORITES action type', () => {
    const initialState = [];
    const action = {
      type: 'ADD_FAVORITE',
      newFavorite: { id: 2 }
    };

    const result = [{ id: 2 }];

    expect(favorites(initialState, action)).toEqual(result);
  });

  it('should output the correct case of SET_FAVORITES action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_FAVORITES',
      favorites: [
        { id: 2, favorite: false },
        { id: 3, favorite: false }
      ]
    };
    const result = [
      { id: 2, favorite: true },
      { id: 3, favorite: true }
    ];

    expect(favorites(initialState, action)).toEqual(result);
  });

  it('should output the correct case of RESET_FAVORITES action type', () => {
    const initialState = [];
    const action = {
      type: 'RESET_FAVORITES'
    };
    const result = [];

    expect(favorites(initialState, action)).toEqual(result);
  });
});
