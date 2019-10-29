import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from './SignUpForm';

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
});
