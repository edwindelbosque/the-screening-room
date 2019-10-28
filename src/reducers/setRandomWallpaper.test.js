import { setRandomWallpaper } from './setRandomWallpaper';

it('should return the initial state', () => {
  const expected = [];
  const result = setRandomWallpaper(undefined, {});
  expect(result).toEqual(expected);
});
