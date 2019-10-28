import { errMsg } from './errMsg';

describe('hasError', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errMsg(undefined, {});

    expect(result).toEqual(expected);
  });
  //   it('should output the correct case of HAS_ERROR action type', () => {
  //     const initialState = '';
  //     const action = {
  //       type: 'HAS_ERROR',
  //       errMsg: 'There is an error'
  //     };

  //     const result = 'There is an error'

  //     expect(hasError(initialState, action)).toEqual(result);
  //   })

  //   it('should not output the case of HAS_ERROR action type', () => {
  //     const initialState = '';
  //     const wrongAction = {
  //       type: 'WRONG_ACTION',
  //       movies: [{}, {}, {}]
  //     };

  //     expect(hasError(initialState, wrongAction)).toEqual(initialState);
  //   })
});
