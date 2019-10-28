import { wallpapers } from './wallpapers';

describe('wallpapers', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = wallpapers(undefined, {});

    expect(result).toEqual(expected);
  })


  it('should return state', () => {
    const mockState = []

    const mockAction = null

    const actionType = null
  })
})