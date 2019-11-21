import { searchWallpapers } from './searchWallpapers';

describe('searchWallpapers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = searchWallpapers(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_SEARCH_WALLPAPERS action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_SEARCH_WALLPAPERS',
      wallpapers: [{}, {}]
    };
    const result = [{}, {}];

    expect(searchWallpapers(initialState, action)).toEqual(result);
  });
});
