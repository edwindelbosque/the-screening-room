import { setUser } from './user';

describe('user', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = setUser(undefined, {})

    expect(result).toEqual(expected);
  })
})