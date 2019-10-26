import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';

describe('LoginForm', () => {
  let wrapper;
  let email = 'vanessa.randall@doane.edu';
  let password = 'Password123';
  let errMsg = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LoginForm errMsg={errMsg} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a movies array, an error message and isLoading property', () => {
    const mockState = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }],
      errMsg: '',
      isLoading: false
    };

    const expected = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }],
      errMsg: '',
      isLoading: false
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
