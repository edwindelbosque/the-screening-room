import React from 'react';
import { shallow } from 'enzyme';
import { createUser } from '../../apiCalls/apiCalls';
import { setUser, hasEmailError } from '../../actions/index';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from './SignUpForm';

jest.mock('../../apiCalls/apiCalls');

describe('SignUpForm', () => {
  let wrapper;
  const mockEvent = {
    target: {
      name: 'name',
      value: 'Vanessa Randall'
    }
  };
  const mockEvent2 = {
    target: {
      name: 'email',
      value: 'vanessa.randall@doane.edu'
    }
  };
  const mockEvent3 = {
    target: {
      name: 'password',
      value: 'Password123'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<SignUpForm emailErrMsg={''} isLoading={false} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should update it's state property onChange of inputs", () => {
    wrapper.instance().handleChange(mockEvent);
    wrapper.instance().handleChange(mockEvent2);

    expect(wrapper.state()).toEqual({
      name: 'Vanessa Randall',
      email: 'vanessa.randall@doane.edu',
      password: '',
      isLoggedIn: false
    });
  });

  it('should call handleClick on submit', () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.form-model').simulate('submit');

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should invoke handleChange on change of email input', () => {
    let wrapper1 = shallow(
      <SignUpForm emailErrMsg={'Error'} isLoading={false} />
    );
    wrapper1.instance().forceUpdate();
    wrapper1.instance().handleChange = jest.fn();
    wrapper1.find('.Form__input--error').simulate('change', mockEvent);

    expect(wrapper1.instance().handleChange).toHaveBeenCalled();
  });

  it('should invoke handleChange on change of name input', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('.Form__input--name').simulate('change', mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should invoke handleChange on change of password input', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('.Form__input--password').simulate('change', mockEvent3);

    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  // it('should redirect the user to the homepage if the user is logged in', () => {
  //   wrapper.instance().forceUpdate();
  //   wrapper.instance().setState({
  //     isLoggedIn: true
  //   })

  // })

  it('should invoke handleChange on change of email input when emailErrMsg is falsey', () => {
    wrapper.instance().forceUpdate();
    const mockEvent = {
      target: {
        name: 'email',
        value: 'vanessa.randall@doane.edu'
      }
    };
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('.Form__input--email').simulate('change', mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should call handleClick within handleSubmit', () => {
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');
    wrapper.instance().handleClick = jest.fn();
    wrapper.instance().handleSubmit(event);

    expect(event.preventDefault).toBeCalled();
    expect(wrapper.instance().handleClick).toHaveBeenCalled();
  });

  // it('should call clearInputs on handleClick', () => {
  //   wrapper.instance().forceUpdate();
  //   wrapper.instance().clearInputs = jest.fn();
  //   wrapper.instance().handleClick();

  //   expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  // });

  it('should reset state when clearInputs is called', () => {
    const expected = { name: '', email: '', password: '', isLoggedIn: '' };

    wrapper.instance().setState({
      name: 'Vanessa Randall',
      email: 'vanessa.randall@doane.edu',
      password: 'Password123'
    });
    wrapper.instance().clearInputs();
    expect(wrapper.state()).toEqual(expected);
  });

  it('should call the createUser fetch when handleClick is called', () => {
    wrapper.instance().handleClick();
    expect(createUser).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with an emailErrMsg string and isLoading boolean', () => {
    const mockState = {
      emailErrMsg: {},
      isLoading: false
    };

    const expected = {
      emailErrMsg: {},
      isLoading: false
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with a setUser, when handleClick is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setUser({
      id: 2,
      name: 'Vanessa Randall',
      email: 'vanessa.randall@doane.edu'
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser({
      id: 2,
      name: 'Vanessa Randall',
      email: 'vanessa.randall@doane.edu'
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with hasEmailError when handleClick is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = hasEmailError('');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.hasEmailError('');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
