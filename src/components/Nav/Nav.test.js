import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav', () => {
  let wrapper;
  let handleCategory = jest.fn();
  let logoutCurrentUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        logoutCurrentUser={logoutCurrentUser} 
        handleCategory={handleCategory}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
