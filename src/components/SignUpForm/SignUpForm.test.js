import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from './SignUpForm';

describe('SignUpForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUpForm />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
