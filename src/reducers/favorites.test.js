import { favorites } from './favorites';

describe('favorites', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favorites(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should reset favorites in state', () => {
    const expected = [];
    const actionType = { type: 'RESET_FAVORITES' };
    const result = favorites(expected, actionType);

    expect(result).toEqual(expected);
  });
});
