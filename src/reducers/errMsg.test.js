import { errMsg } from './errMsg';

describe('errMsg', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errMsg(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should not output the case of HAS_ERROR action type', () => {
    const initialState = '';
    const wrongAction = {
      type: 'WRONG_ACTION',
      movies: [{}, {}, {}]
    };

    expect(errMsg(initialState, wrongAction)).toEqual(initialState);
  });
});
