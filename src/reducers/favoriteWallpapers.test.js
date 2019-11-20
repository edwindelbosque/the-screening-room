import { favoriteWallpapers } from './favoriteWallpapers';

describe('favorites', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favoriteWallpapers(undefined, {});

    expect(result).toEqual(expected);
  });
});
