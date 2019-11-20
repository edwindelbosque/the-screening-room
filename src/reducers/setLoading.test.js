import { isLoading } from './setLoading.js';

describe('setLoading', () => {
  it('should return the initial state', () => {
    const expected = false;

    const result = isLoading(undefined, {});

    expect(result).toEqual(expected);
  });

    it('should output the correct case of IS_LOADING action type', () => {
      const initialState = '';
      const action = {
        type: 'IS_LOADING',
        bool: false
      };

      const result = false

      expect(isLoading(initialState, action)).toEqual(result);
    })

    it('should not output the case of IS_LOADING action type', () => {
      const initialState = '';
      const wrongAction = {
        type: 'WRONG_ACTION',
        movies: [{}, {}, {}]
      };

      expect(isLoading(initialState, wrongAction)).toEqual(initialState);
    })
});
