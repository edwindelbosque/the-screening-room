import React from 'react';
import { shallow } from 'enzyme';
import { AccessModal, mapStateToProps } from './AccessModal';

describe('AccessModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AccessModal />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
