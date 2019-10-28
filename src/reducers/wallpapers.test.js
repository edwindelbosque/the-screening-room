import { wallpapers } from './wallpapers';

describe('wallpapers', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = wallpapers(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state', () => {
    const mockAction = [
      {
        id: 475557,
        wallpaper:
          'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg'
      }
    ];
    const actionType = 'SET_WALLPAPERS';
    const expected = mockAction;
    const result = wallpapers(mockAction, actionType);

    expect(result).toEqual(expected);
  });

  // it('should return wallpapers if action.type is "SET_WALLPAPERS"', () => {

  // })
});
