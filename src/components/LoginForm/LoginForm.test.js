import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { setUser, hasError, setFavorites } from '../../actions/index';

describe('LoginForm', () => {
  let wrapper;
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

describe('mapDispatchToProps', () => {
  let user = {
    name: 'Vanessa Randall',
    email: 'vanessa.randall@doane.edu',
    password: 'Password123',
    id: 2
  };

  it('calls dispatch with a setUser action when handleClick is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setUser(user);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser(user);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
