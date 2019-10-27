import { favorites } from './favorites';

describe('favorites', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favorites(undefined, {});

    expect(result).toEqual(expected);
  });
});
