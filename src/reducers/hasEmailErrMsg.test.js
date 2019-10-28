import { emailErrMsg } from './hasEmailErrMsg';

describe('emailErrMsg', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = emailErrMsg(undefined, {});

    expect(result).toEqual(expected);
  });
});
