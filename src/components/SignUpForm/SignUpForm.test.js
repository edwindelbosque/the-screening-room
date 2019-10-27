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
    wrapper = shallow(<SignUpForm />);
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
    wrapper.instance().handleClick = jest.fn();
    wrapper.find('.Form__button').simulate('click');

    expect(wrapper.instance().handleClick).toHaveBeenCalled();
  });
});
