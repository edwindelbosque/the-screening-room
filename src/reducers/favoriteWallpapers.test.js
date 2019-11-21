import { favoriteWallpapers } from './favoriteWallpapers';

describe('favoriteWallpapers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favoriteWallpapers(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should output the correct case of SET_FAVORITE_WALLPAPERS action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_FAVORITE_WALLPAPERS',
      wallpapers: [{}, {}, {}]
    };

    const result = [{}, {}, {}];

    expect(favoriteWallpapers(initialState, action)).toEqual(result);
  });
});
