// import { hasError } from './hasError.js';

// describe('hasError', () => {
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

// });