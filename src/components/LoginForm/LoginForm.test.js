import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { setUser, hasError, setFavorites } from '../../actions/index';
import { selectUser, getFavorites } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

describe('LoginForm', () => {
  let wrapper;
  let errMsg = jest.fn();
  let mockEventEmail = {
    target: {
      name: 'email',
      value: 'elyse@noneofyourbusiness.com'
    }
  };
  let mockEventPassword = {
    target: {
      name: 'password',
      value: 'testing123'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<LoginForm errMsg={errMsg} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update form state when handleChange is called', () => {
    const expectedEmail = 'elyse@noneofyourbusiness.com';
    const expectedPassword = 'testing123';

    wrapper.instance().handleChange(mockEventEmail);
    wrapper.instance().handleChange(mockEventPassword);
    expect(wrapper.state('email')).toEqual(expectedEmail);
    expect(wrapper.state('password')).toEqual(expectedPassword);
  });

  it('should reset state when clearInputs is called', () => {
    const expected = { email: '', password: '', isLoggedIn: '' };

    wrapper.instance().setState({
      email: 'elyse@noneofyourbusiness.com',
      password: 'testing123'
    });
    wrapper.instance().clearInputs();
    expect(wrapper.state()).toEqual(expected);
  });

  it('should call handleClick on submit', () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.form-model').simulate('submit');

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should call the selectUser fetch when handleClick is called', () => {
    wrapper.instance().handleClick();
    expect(selectUser).toHaveBeenCalled();
  });

  it.skip('should update the value of isLoggedIn when handleSubmit is called', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    expect(wrapper.state('isLoggedIn')).toEqual(false);
    wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper.state('isLoggedIn')).toEqual(true);
  });

  it.skip('should invoke handleChange on change of email input when error is true', () => {
    let wrapper1 = shallow(<LoginForm errMsg={'Error'} isLoading={false} />);
    wrapper1.instance().forceUpdate();
    wrapper1.instance.handleChange = jest.fn();
    wrapper1
      .find('.Form__input--error')
      .at(0)
      .simulate('change', mockEventEmail);

    expect(wrapper1.instance().handleChange).toHaveBeenCalled();
  });

  it.skip('should invoke handleChange on change of email input when error it false', () => {
    let wrapper1 = shallow(<LoginForm errMsg={''} />);
    wrapper.instance().forceUpdate();
    wrapper.instance.handleChange = jest.fn();
    wrapper
      .find('.Form__input')
      .at(0)
      .simulate('change', mockEventEmail);

    expect(wrapper1.instance().handleChange).toHaveBeenCalled();
  });

  it('should invoke handleChange onchange of password input', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper
      .find('.Form__input')
      .at(1)
      .simulate('change', mockEventPassword);

    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should call the getFavorites fetch when findUserFavorites is called', () => {
    let user = {
      id: 1,
      name: 'Alan',
      email: 'alan@turing.io'
    };
    wrapper.instance().findUserFavorites(user);
    expect(getFavorites).toHaveBeenCalled();
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

  let favorites = [
    {
      id: 63,
      movie_id: 420809,
      user_id: 1,
      title: 'Maleficent: Mistress of Evil',
      poster_path:
        'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview:
        'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    },
    {
      id: 63,
      movie_id: 420809,
      user_id: 1,
      title: 'Maleficent: Mistress of Evil',
      poster_path:
        'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview:
        'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    }
  ];

  const mockDispatch = jest.fn();

  it('should call dispatch with a setUser action when handleClick is called', () => {
    const actionToDispatch = setUser(user);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser(user);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setFavorites action when handleClick is called', () => {
    const actionToDispatch = setFavorites(favorites);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setFavorites(favorites);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a hasError action when handleClick is called', () => {
    const message = '';
    const actionToDispatch = hasError(message);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.hasError(message);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
